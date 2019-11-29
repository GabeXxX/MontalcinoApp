import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Operation} from './operation.model';
import {map, take, tap} from 'rxjs/operators';
import {UniqueIdService} from './unique-id.service';

@Injectable({
    providedIn: 'root'
})
export class OperationsService {

    constructor(private uniqueId: UniqueIdService) {
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

    getOperation(operationId: string) {
        return this.operations.pipe(
            take(1),
            map((operations) => {
                return {...operations.find((operation) => operation.operationId === operationId)};
            })
        );
    }

    createOperation(name: string,
                    fieldId: string,
                    description: string = 'Descrizione operazione',
                    date: string = '1/1/1970',
                    operator: string = 'Marco Rossi') {

        const operationId = this.uniqueId.createOperationUUID();

        this.operations.pipe(take(1)).subscribe((operations) => {
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
        });

    }


    removeOperation(operationId: string) {
        return this.operations.pipe(take(1), tap((operations) => {
                this._operations.next(operations.filter(operation => operation.operationId !== operationId));
            })
        );
    }

    updateOperation(operationId: string,
                    name: string,
                    description: string = 'Descrizione operazione',
                    date: string = '1/1/1970',
                    operator: string = 'Marco Rossi') {
        return this.operations.pipe(take(1), tap((operations) => {
            const updateOperationIndex = operations.findIndex((operation) => operation.operationId === operationId);
            const updateOperations = [...operations];
            const oldOperation = updateOperations[updateOperationIndex];
            updateOperations[updateOperationIndex] = new Operation(name, oldOperation.operationId, oldOperation.fieldId, description, date, operator);
            this._operations.next(updateOperations);
        }));
    }


    getFieldOperations(fieldId: string, operations: Operation[]) {
                return [...operations.filter((operation) => operation.fieldId === fieldId)];
    }


}
