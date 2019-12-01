import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShareStateService {

    constructor() {
    }

    private _data = {
        defaultFieldId: '',
        defaultName: '',
        defaultDescription: '',
        defaultDate: new Date().toLocaleDateString(),
        defaultOperator: ''
    };


    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    clear() {
        this._data = {
            defaultFieldId: '',
            defaultName: '',
            defaultDescription: '',
            defaultDate: new Date().toLocaleDateString(),
            defaultOperator: ''
        };
    }
}
