import {Injectable} from '@angular/core';
import {UniqueIdService} from './unique-id.service';
import {BehaviorSubject, of} from 'rxjs';
import {Operation} from './operation.model';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {LOCAL_SERVER} from './global';

@Injectable({
    providedIn: 'root'
})
export class DefaultOperationsService {

    constructor(private uniqueId: UniqueIdService, private httpClient: HttpClient) {
    }

    private _defaultOperations = new BehaviorSubject<Operation[]>([
        new Operation('Operazione 1', '6', 'undefined'),
        new Operation('Operazione 1', '7', 'undefined'),
        new Operation('Operazione 1', '8', 'undefined'),
        new Operation('Operazione 1', '9', 'undefined'),
        new Operation('Operazione 2', '10', 'undefined'),
    ]);


    get defaultOperations() {
        return this._defaultOperations.asObservable();

    }

    fetchDefaultOperations() {
        return this.httpClient.get<Operation[]>(`${LOCAL_SERVER.URL}/manager/preferite-operations`).pipe(
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
                return this._defaultOperations.next(operations);
            })
        );
    }


    getDefaultOperation(operationId: string) {
        return this.httpClient.get(`${LOCAL_SERVER.URL}/manager/preferite-operations/${operationId}/`).pipe(
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

    createDeafaultOperation(name: string,
                            description: string = 'Descrizione operazione',
                            date: string = '1/1/1970',
                            operator: string = 'Marco Rossi',
                            fieldId: string = 'Not defined') {

        const operationId = this.uniqueId.createOperationUUID();

        const newOperation = new Operation(
            name,
            operationId,
            fieldId,
            description,
            date,
            operator,
        );

        return this.httpClient.post(`${LOCAL_SERVER.URL}/manager/preferite-operations`, {...newOperation})
            .pipe(
                switchMap((resData) => {
                    return this.defaultOperations;
                }),

                take(1),
                tap((operations) => {
                    this._defaultOperations.next((operations.concat(newOperation)));
                })
            );
    }


    removeDefaultOperation(operationId: string) {
        return this.httpClient.delete(`${LOCAL_SERVER.URL}/manager/preferite-operations/${operationId}/`).pipe(
            switchMap(() => {
                return this.defaultOperations;
            }),
            take(1),
            tap((operations) => {
                this._defaultOperations.next(operations.filter(operation => operation.operationId !== operationId));
            })
        );
    }

    updateDefaultOperation(operationId: string,
                           name: string,
                           description: string = 'Descrizione operazione',
                           date: string = '1/1/1970',
                           operator: string = 'Marco Rossi') {
        let updateOperations: Operation[];

        return this.defaultOperations.pipe(
            take(1),
            switchMap((operations) => {
                if (operations === undefined || operations.length <= 0) {
                    return this.fetchDefaultOperations();
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

                return this.httpClient.put(`${LOCAL_SERVER.URL}/manager/preferite-operations/${operationId}/`,
                    {...updateOperations[updateOperationIndex]});
            }),
            tap(() => {
                this._defaultOperations.next(updateOperations);
            })
        );

    }
}

