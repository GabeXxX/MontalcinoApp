import {Injectable} from '@angular/core';
import {FieldsService} from './fields.service';
import {OperationsService} from './operations.service';

@Injectable({
    providedIn: 'root'
})
export class FacadeService {

    constructor(private fieldsService: FieldsService, private operationsService: OperationsService) {
    }

    get fields() {
        return this.fieldsService.fields;
    }

    get operations() {
        return this.operationsService.operations;
    }

    createField(name: string,
                position: string,
                description: string = null,
                imagePreviewUrl: string = '/assets/fieldPreview.jpg',
                cultivation: string = 'Vite',
                owner: string = 'Azienda Montalcino',
                area: string = null,
                perimeter: string = null) {
        this.fieldsService.createField(name, position, description, imagePreviewUrl, cultivation, owner, area, perimeter);
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
                area: string = null,
                perimeter: string = null) {
        return this.fieldsService.updateField(fieldId, name, position, description, imagePreviewUrl, cultivation, owner, area, perimeter);
    }

    getFieldOperations(fieldId: string) {
        return this.operationsService.getFieldOperations(fieldId);
    }

    createOperation(name: string,
                    fieldId: string,
                    description: string = 'Descrizione operazione',
                    date: string = '1/1/1970',
                    operator: string = 'Marco Rossi') {
        this.operationsService.createOperation(name, fieldId, description, date, operator);
    }

    removeOperation(operationId: string) {
        this.operationsService.removeOperation(operationId);
    }

    getOperation(operationId: string) {
        return this.operationsService.getOperation(operationId);
    }

    updateOperation(operationId: string,
                    name: string,
                    description: string = 'Descrizione operazione',
                    date: string = '1/1/1970',
                    operator: string = 'Marco Rossi') {
        this.operationsService.updateOperation(operationId, name, description, date, operator);
    }

}
