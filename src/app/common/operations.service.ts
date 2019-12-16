import {Injectable} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {Operation} from './operation.model';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {UniqueIdService} from './unique-id.service';
import {HttpClient} from '@angular/common/http';
import {CalendarEventsService} from './calendar-events.service';


@Injectable({
    providedIn: 'root'
})
export class OperationsService {

    constructor(private uniqueId: UniqueIdService,
                private httpClient: HttpClient,
                private eventsService: CalendarEventsService) {
    }

    private _operations = new BehaviorSubject<Operation[]>([
        new Operation('Operazione 1', '1', '1'),
        new Operation('Operazione 1', '2', '2'),
        new Operation('Operazione 1', '3', '3'),
        new Operation('Operazione 1', '4', '4'),
        new Operation('Operazione 2', '5', '4'),
    ]);


    get operations() {
        return this._operations.asObservable();

    }

    fetchOperations() {
        return this.httpClient.get<Operation[]>('Http://127.0.0.1:8000/manager/operations').pipe(
            map((resData) => {
                const operations = [];
                resData.forEach((operation) => {
                    operations.push(new Operation(operation.name,
                        operation.operationId,
                        operation.fieldId,
                        operation.description,
                        operation.date,
                        operation.operator,
                        operation.isDone
                        )
                    );
                });
                return operations;
            }), /* map() Applies a given project function to each value emitted by the source
             Observable, and emits the resulting values as an Observable.*/
            tap((operations) => {
                return this._operations.next(operations);
            })
        );
    }


    getOperation(operationId: string) {
        return this.httpClient.get(`Http://127.0.0.1:8000/manager/operations/${operationId}/`).pipe(
            map((operation: Operation) => {
                return {
                    name: operation.name,
                    operationId: operation.operationId,
                    fieldId: operation.fieldId,
                    description: operation.description,
                    date: operation.date,
                    operator: operation.operator,
                    isDone: operation.isDone
                };
            }));

    }

    createOperation(name: string,
                    fieldId: string,
                    description: string = 'Descrizione operazione',
                    date: string = '1/1/1970',
                    operator: string = 'Marco Rossi') {

        const operationId = this.uniqueId.createOperationUUID();

        const newOperation = new Operation(
            name,
            operationId,
            fieldId,
            description,
            date,
            operator,
        );

        const str = date;
        console.log(str);
        const darr = str.split('/');
        console.log(darr);
        let time = new Date(Number(darr[2]), Number(darr[1]) - 1, Number(darr[0]));
        console.log(time);
        time = time.toISOString();
        console.log(time);


        this.eventsService.createEvent(operationId, name, time, time).subscribe();

        return this.httpClient.post('Http://127.0.0.1:8000/manager/operations', {...newOperation})
            .pipe( /*tap(
                (data:any[]) => {
                    console.log(data);
                })*/
                switchMap((resData) => { // On each emission the previous inner observable (the result of the function you supplied) is cancelled and the new observable is subscribed.
                    return this.operations;  // return the entire array as an Observable
                }),

                take(1),  // Take only the first emission of that flux, the latest fields array
                tap((operations) => {
                    this._operations.next((operations.concat(newOperation)));
                }) /*Intercepts each emission on the source and runs a function,
                but returns an output which is identical to the source as long as errors don't occur.*/
            );


        /*this.operations.pipe(take(1)).subscribe((operations) => {
            this._operations.next(
                operations.concat(new Operation(
                    name,
                    operationId,
                    fieldId,
                    description,
                    date,
                    operator,
                    )
                )
            );
        });*/

    }


    removeOperation(operationId: string) {
        this.eventsService.removeEvent(operationId).subscribe();

        return this.httpClient.delete(`Http://127.0.0.1:8000/manager/operations/${operationId}/`).pipe(
            switchMap(() => {
                return this.operations;
            }),
            take(1),
            tap((operations) => {
                this._operations.next(operations.filter(operation => operation.operationId !== operationId));
            })
        );
        /*return this.operations.pipe(take(1), tap((operations) => {
                this._operations.next(operations.filter(operation => operation.operationId !== operationId));
            })
        );*/
    }

    updateOperation(operationId: string,
                    name: string,
                    description: string = 'Descrizione operazione',
                    date: string = '1/1/1970',
                    operator: string = 'Marco Rossi',
    ) {
        let updateOperations: Operation[];

        const str = date;
        console.log(str);
        const darr = str.split('/');
        console.log(darr);
        let time = new Date(Number(darr[2]), Number(darr[1]) - 1, Number(darr[0]));
        console.log(time);
        time = time.toISOString();
        console.log(time);

        this.eventsService.updateEvent(operationId, name, time, time).subscribe();

        return this.operations.pipe(
            take(1),
            switchMap((operations) => {
                if (operations === undefined || operations.length <= 0) {
                    return this.fetchOperations();
                } else {
                    return of(operations);
                }
            }),
            switchMap((operations) => {
                const updateOperationIndex = operations.findIndex((operation) => operation.operationId === operationId);
                updateOperations = [...operations];
                const oldOperation = updateOperations[updateOperationIndex];
                updateOperations[updateOperationIndex] = new Operation(
                    name,
                    oldOperation.operationId,
                    oldOperation.fieldId,
                    description,
                    date,
                    operator,
                    oldOperation.isDone
                );

                console.log(updateOperations[updateOperationIndex]);
                // option+9 for `literal concatenation operator
                return this.httpClient.put(`Http://127.0.0.1:8000/manager/operations/${operationId}/`,
                    {...updateOperations[updateOperationIndex]});
            }),
            tap(() => {
                this._operations.next(updateOperations);
            })
        );
        /*return this.operations.pipe(take(1), tap((operations) => {
            const updateOperationIndex = operations.findIndex((operation) => operation.operationId === operationId);
            const updateOperations = [...operations];
            const oldOperation = updateOperations[updateOperationIndex];
            updateOperations[updateOperationIndex] = new Operation(name, oldOperation.operationId, oldOperation.fieldId, description, date, operator);
            this._operations.next(updateOperations);
        }));*/
    }


    getFieldOperations(fieldId: string, operations: Operation[]) {
                return [...operations.filter((operation) => operation.fieldId === fieldId)];
    }

    operationIsDone(operationId: string) {
        let updateOperations: Operation[];

        return this.operations.pipe(
            take(1),
            switchMap((operations) => {
                if (operations === undefined || operations.length <= 0) {
                    return this.fetchOperations();
                } else {
                    return of(operations);
                }
            }),
            switchMap((operations) => {
                const updateOperationIndex = operations.findIndex((operation) => operation.operationId === operationId);
                updateOperations = [...operations];
                const oldOperation = updateOperations[updateOperationIndex];
                updateOperations[updateOperationIndex] = new Operation(
                    oldOperation.name,
                    oldOperation.operationId,
                    oldOperation.fieldId,
                    oldOperation.description,
                    oldOperation.date,
                    oldOperation.operator,
                    !oldOperation.isDone
                );

                console.log(updateOperations[updateOperationIndex]);
                // option+9 for `literal concatenation operator
                return this.httpClient.put(`Http://127.0.0.1:8000/manager/operations/${operationId}/`,
                    {...updateOperations[updateOperationIndex]});
            }),
            tap(() => {
                this._operations.next(updateOperations);
            })
        );

    }


}
