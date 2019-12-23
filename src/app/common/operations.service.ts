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

    private _operations = new BehaviorSubject<Operation[]>([]);


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
            }),
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
        const darr = str.split('/');
        let time = new Date(Number(darr[2]), Number(darr[1]) - 1, Number(darr[0])).toISOString();

        this.eventsService.createEvent(operationId, name, time, time).subscribe();

        return this.httpClient.post('Http://127.0.0.1:8000/manager/operations', {...newOperation})
            .pipe(
                switchMap((resData) => {
                    return this.operations;
                }),

                take(1),
                tap((operations) => {
                    this._operations.next((operations.concat(newOperation)));
                })
            );


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

    }

    updateOperation(operationId: string,
                    name: string,
                    description: string = 'Descrizione operazione',
                    date: string = '1/1/1970',
                    operator: string = 'Marco Rossi',
    ) {
        let updateOperations: Operation[];

        const str = date;
        const darr = str.split('/');
        let time = new Date(Number(darr[2]), Number(darr[1]) - 1, Number(darr[0])).toISOString();

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

                return this.httpClient.put(`Http://127.0.0.1:8000/manager/operations/${operationId}/`,
                    {...updateOperations[updateOperationIndex]});
            }),
            tap(() => {
                this._operations.next(updateOperations);
            })
        );
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

                return this.httpClient.put(`Http://127.0.0.1:8000/manager/operations/${operationId}/`,
                    {...updateOperations[updateOperationIndex]});
            }),
            tap(() => {
                this._operations.next(updateOperations);
            })
        );

    }


}
