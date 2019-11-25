import {Component, OnInit} from '@angular/core';
import {Field} from '../../common/field.model';
import {FacadeService} from '../../common/facade.service';

@Component({
    selector: 'app-img-fields',
    templateUrl: './img-fields.page.html',
    styleUrls: ['./img-fields.page.scss'],
})
export class ImgFieldsPage implements OnInit {
    loadedFields: Field[];

    constructor(private facadeService: FacadeService) {
    }

    ngOnInit() {
        this.loadedFields = this.facadeService.fields;
    }

}
