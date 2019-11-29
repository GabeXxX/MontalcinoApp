import {Injectable} from '@angular/core';
import {UniqueIdService} from './unique-id.service';
import {BehaviorSubject} from 'rxjs';
import {Operation} from './operation.model';
import {map, take, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DefaultOperationsService {

    constructor(private uniqueId: UniqueIdService) {
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

    getDefaultOperation(operationId: string) {
        return this.defaultOperations.pipe(
            take(1),
            map((operations) => {
                return {...operations.find((operation) => operation.operationId === operationId)};
            })
        );
    }

    createDeafaultOperation(name: string,
                            description: string = 'Descrizione operazione',
                            date: string = '1/1/1970',
                            operator: string = 'Marco Rossi') {

        const operationId = this.uniqueId.createOperationUUID();

        this.defaultOperations.pipe(take(1)).subscribe((operations) => {
            this._defaultOperations.next(
                operations.concat(new Operation(
                    name,
                    operationId,
                    'undefined',
                    description,
                    date,
                    operator,
                    )
                )
            );
        });

    }


    removeDefaultOperation(operationId: string) {
        return this.defaultOperations.pipe(take(1), tap((operations) => {
                this._defaultOperations.next(operations.filter(operation => operation.operationId !== operationId));
            })
        );
    }

    updateDefaultOperation(operationId: string,
                           name: string,
                           description: string = 'Descrizione operazione',
                           date: string = '1/1/1970',
                           operator: string = 'Marco Rossi') {
        return this.defaultOperations.pipe(take(1), tap((operations) => {
            const updateOperationIndex = operations.findIndex((operation) => operation.operationId === operationId);
            const updateOperations = [...operations];
            const oldOperation = updateOperations[updateOperationIndex];
            updateOperations[updateOperationIndex] = new Operation(name, oldOperation.operationId, oldOperation.fieldId, description, date, operator);
            this._defaultOperations.next(updateOperations);
        }));
    }
}

