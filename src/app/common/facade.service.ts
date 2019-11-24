import {Injectable} from '@angular/core';
import {FieldsService} from './fields.service';

@Injectable({
    providedIn: 'root'
})
export class FacadeService {

    constructor(private fieldsService: FieldsService) {
    }

    createField(name: string, position: string, id: number, description: string) {
        this.fieldsService.addField(name, position, id, description);
    }

    removeField() {
    }

    updateField() {
    }

    getField() {
        return this.fieldsService.fields;
    }

    createOperation() {
    }

    removeOperation() {
    }

    updateOperation() {
    }

    getOPeration() {
    }

}
