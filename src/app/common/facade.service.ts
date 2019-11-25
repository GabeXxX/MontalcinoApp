import {Injectable} from '@angular/core';
import {FieldsService} from './fields.service';
import {Operation} from './operation.model';

@Injectable({
    providedIn: 'root'
})
export class FacadeService {

    constructor(private fieldsService: FieldsService) {
    }

    get fields() {
        return this.fieldsService.fields;
    }

    removeField() {
    }

    updateField() {
    }

    createField(name: string, position: string, id: string, description: string) {
        this.fieldsService.createField(name, position, id, description);
    }

    getField(id: string) {
        return {...this.fieldsService.fields.find(p => p.id === id)};
    }

    createOperation(fieldId: string, name: string) {
        const tmpField = this.getField(fieldId);
        tmpField.operations.push(new Operation(name, '5'));
        console.log(tmpField);
    }

    removeOperation() {
    }

    updateOperation() {
    }

    getOperation(fieldId: string, operationId: string) {
        const tmpField = this.getField(fieldId);
        const operation = tmpField.operations.find(o => o.id === operationId);
        return {...operation};
    }

}
