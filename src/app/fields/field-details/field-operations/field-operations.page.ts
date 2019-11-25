import {Component, OnInit} from '@angular/core';
import {Field} from '../../../common/field.model';
import {FacadeService} from '../../../common/facade.service';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Operation} from '../../../common/operation.model';

@Component({
    selector: 'app-field-operations',
    templateUrl: './field-operations.page.html',
    styleUrls: ['./field-operations.page.scss'],
})
export class FieldOperationsPage implements OnInit {
    field: Field;
    operations: Operation [];

    constructor(private facadeService: FacadeService,
                private activatedRoute: ActivatedRoute,
                private navController: NavController) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('fieldId')) {
                this.navController.navigateBack('/fields');
                return;
            }
            this.field = this.facadeService.getField(paramMap.get('fieldId'));
            this.operations = this.field.operations;

        });
    }

    onDelete() {
    }
}
