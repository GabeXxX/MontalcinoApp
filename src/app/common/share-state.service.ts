import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShareStateService {

    constructor() {
    }

    private _data: any = null;

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }
}
