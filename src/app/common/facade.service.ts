import {Injectable} from '@angular/core';
import {FieldsService} from './fields.service';
import {OperationsService} from './operations.service';
import {Operation} from './operation.model';
import {DefaultOperationsService} from './default-operations.service';

@Injectable({
    providedIn: 'root'
})
export class FacadeService {

    constructor(private fieldsService: FieldsService, private operationsService: OperationsService, private defaultOperationsService: DefaultOperationsService) {
    }

    get fields() {
        return this.fieldsService.fields;
    }

    fetchFields() {
        return this.fieldsService.fetchFields();
    }

    get operations() {
        return this.operationsService.operations;
    }

    fetchOperations() {
        return this.operationsService.fetchOperations();
    }

    get defaultOperations() {
        return this.defaultOperationsService.defaultOperations;

    }

    createField(name: string,
                position: string,
                description: string = null,
                imagePreviewUrl: string = '/assets/fieldPreview.jpg',
                cultivation: string = 'Vite',
                owner: string = 'Azienda Montalcino',
                area: number = null,
                perimeter: number = null) {
        return this.fieldsService.createField(name, position, description, imagePreviewUrl, cultivation, owner, area, perimeter);
    }

    getField(fieldId: string) {
        return this.fieldsService.getField(fieldId);
    }

    removeField(fieldId: string) {
        return this.fieldsService.removeField(fieldId);
    }

    updateField(fieldId: string,
                name: string,
                position: string,
                description: string = null,
                imagePreviewUrl: string = '/assets/fieldPreview.jpg',
                cultivation: string = 'Vite',
                owner: string = 'Azienda Montalcino',
                area: number = null,
                perimeter: number = null) {
        return this.fieldsService.updateField(fieldId, name, position, description, imagePreviewUrl, cultivation, owner, area, perimeter);
    }

    getFieldOperations(fieldId: string, operations: Operation []) {
        return this.operationsService.getFieldOperations(fieldId, operations);
    }

    createOperation(name: string,
                    fieldId: string,
                    description: string = 'Descrizione operazione',
                    date: string = '1/1/1970',
                    operator: string = 'Marco Rossi') {
        return this.operationsService.createOperation(name, fieldId, description, date, operator);
    }

    removeOperation(operationId: string) {
        return this.operationsService.removeOperation(operationId);
    }

    getOperation(operationId: string) {
        return this.operationsService.getOperation(operationId);
    }

    updateOperation(operationId: string,
                    name: string,
                    description: string = 'Descrizione operazione',
                    date: string = '1/1/1970',
                    operator: string = 'Marco Rossi') {
        return this.operationsService.updateOperation(operationId, name, description, date, operator);
    }

    getDefaultOperation(operationId: string) {
        return this.defaultOperationsService.getDefaultOperation(operationId);
    }

    fetchDefaultOperations() {
        return this.defaultOperationsService.fetchDefaultOperations();
    }

    createDeafaultOperation(name: string,
                            description: string = 'Descrizione operazione',
                            date: string = '1/1/1970',
                            operator: string = 'Marco Rossi') {
        return this.defaultOperationsService.createDeafaultOperation(name, description, date, operator);
    }

    removeDefaultOperation(operationId: string) {
        return this.defaultOperationsService.removeDefaultOperation(operationId);
    }

    updateDefaultOperation(operationId: string,
                           name: string,
                           description: string = 'Descrizione operazione',
                           date: string = '1/1/1970',
                           operator: string = 'Marco Rossi') {
        return this.defaultOperationsService.updateDefaultOperation(operationId, name, description, date, operator);
    }

    operationIsDone(operationId: string) {
        return this.operationsService.operationIsDone(operationId);
    }


}
