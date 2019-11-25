import {Component, OnInit} from '@angular/core';
import {Operation} from '../../../../../common/operation.model';
import {FacadeService} from '../../../../../common/facade.service';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-update-operation-details',
    templateUrl: './update-operation-details.page.html',
    styleUrls: ['./update-operation-details.page.scss'],
})
export class UpdateOperationDetailsPage implements OnInit {
    operation: Operation;

    constructor(private facadeService: FacadeService, private navController: NavController, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('operationId') || !paramMap.has('fieldId')) {
                this.navController.navigateBack('/fields');
                return;
            }
            this.operation = this.facadeService.getOperation(paramMap.get('fieldId'), paramMap.get('operationId'));
        });

    }
}
