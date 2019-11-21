import {Component, OnInit} from '@angular/core';
import {Field} from '../field.model';
import {FieldsService} from '../fields.service';

@Component({
    selector: 'app-list-fields',
    templateUrl: './list-fields.page.html',
    styleUrls: ['./list-fields.page.scss'],
})
export class ListFieldsPage implements OnInit {
    loadedFields: Field[];

    constructor(private fieldsService: FieldsService) {
    }

    ngOnInit() {
        this.loadedFields = this.fieldsService.fields;
    }

}
