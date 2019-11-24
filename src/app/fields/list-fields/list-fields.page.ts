import {Component, OnInit} from '@angular/core';
import {Field} from '../../common/field.model';
import {FacadeService} from '../../common/facade.service';


@Component({
    selector: 'app-list-fields',
    templateUrl: './list-fields.page.html',
    styleUrls: ['./list-fields.page.scss'],
})
export class ListFieldsPage implements OnInit {
    loadedFields: Field[];

    constructor(private facadeService: FacadeService) {
    }

    ngOnInit() {
        this.loadedFields = this.facadeService.getField();
    }

}
