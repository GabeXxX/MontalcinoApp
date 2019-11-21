import {Injectable} from '@angular/core';
import {Field} from './field.model';

@Injectable({
    providedIn: 'root'
})
export class FieldsService {
    constructor() {
    }

    private _fields: Field[] = [
        new Field('Campo 1', 'Via del Brunello 16', 'Coltivazione di Brunello'),
        new Field('Campo 2', 'Via del Rosso 35', 'Coltivazione di Rosso'),
        new Field('Campo 3', 'Via del Grappolo 18', 'Coltivazione di uva da tavola'),
        new Field('Campo 4', 'Via della Vite 2', 'Coltivazione di uva bianca'),
    ];

    get fields() {
        return [...this._fields];
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
