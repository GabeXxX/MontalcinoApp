import {Injectable} from '@angular/core';
import {Field} from './field.model';
import {Operation} from './operation.model';

@Injectable({
    providedIn: 'root'
})
export class FieldsService {

    private _fields: Field[] = [
        new Field('Campo 1', 'Via del Brunello 16', '1', 'Coltivazione di Brunello', [new Operation('Operazione 1', '1')], 'https://source.unsplash.com/1600x900/?wineyards'),
        new Field('Campo 2', 'Via del Rosso 35', '2', 'Coltivazione di Rosso', [new Operation('Operazione 1', '2')], 'https://source.unsplash.com/1600x900/?nature, wine'),
        new Field('Campo 3', 'Via del Grappolo 18', '3', 'Coltivazione di uva da tavola', [new Operation('Operazione 1', '3')], 'https://source.unsplash.com/1600x900/?wine'),
        new Field('Campo 4', 'Via della Vite 2', '4', 'Coltivazione di uva bianca', [new Operation('Operazione 1', '4')], 'https://source.unsplash.com/1600x900/?nature, green'),
    ];

    constructor() {
    }

    get fields() {
        return [...this._fields];
    }

    createField(name: string, position: string, id: string, description: string) {
        this._fields.push(
            new Field(name, position, id, description)
        );
    }

    removeField() {
    }


}


/*
1)fullName : function() {
    return this.firstName + " " + this.lastName;
  }

2)get fullName() {
    return this.firstName + " " + this.lastName;
  }

Example 1 access fullName as a function: person.fullName().
Example 2 access fullName as a property: person.fullName.

Spread operator ...: Think of this spread thing as extracting all the individual properties
one by one and transferring them to the new object.
 */
