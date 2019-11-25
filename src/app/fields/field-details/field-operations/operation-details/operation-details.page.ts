import {Component, OnInit} from '@angular/core';
import {Operation} from '../../../../common/operation.model';
import {FacadeService} from '../../../../common/facade.service';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {Field} from '../../../../common/field.model';

@Component({
    selector: 'app-operation-details',
    templateUrl: './operation-details.page.html',
    styleUrls: ['./operation-details.page.scss'],
})
export class OperationDetailsPage implements OnInit {
    operation: Operation;
    field: Field;

    constructor(private facadeService: FacadeService, private navController: NavController, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('operationId') || !paramMap.has('fieldId')) {
                this.navController.navigateBack('/fields');
                return;
            }
            this.operation = this.facadeService.getOperation(paramMap.get('fieldId'), paramMap.get('operationId'));
            this.field = this.facadeService.getField(paramMap.get('fieldId'));

        });
    }

}
