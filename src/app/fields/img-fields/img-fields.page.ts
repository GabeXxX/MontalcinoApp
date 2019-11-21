import {Component, OnInit} from '@angular/core';
import {Field} from '../field.model';
import {FieldsService} from '../fields.service';

@Component({
    selector: 'app-img-fields',
    templateUrl: './img-fields.page.html',
    styleUrls: ['./img-fields.page.scss'],
})
export class ImgFieldsPage implements OnInit {
    loadedFields: Field[];

    constructor(private fieldsService: FieldsService) {
    }

    ngOnInit() {
        this.loadedFields = this.fieldsService.fields;
    }

}
