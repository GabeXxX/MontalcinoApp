import {Component, OnInit} from '@angular/core';
import {Operation} from '../../../../common/operation.model';
import {FacadeService} from '../../../../common/facade.service';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {Field} from '../../../../common/field.model';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-operation-details',
    templateUrl: './operation-details.page.html',
    styleUrls: ['./operation-details.page.scss'],
})
export class OperationDetailsPage implements OnInit {
    private operation: Operation;
    private field: Field;
    private fieldSubscription: Subscription;
    private fieldSubscription1: Subscription;


    constructor(private facadeService: FacadeService,
                private activatedRoute: ActivatedRoute,
                private navController: NavController) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('operationId')) {
                this.navController.navigateBack('/fields');
                return;
            }
            this.fieldSubscription = this.facadeService.getField(paramMap.get('fieldId'))
                .subscribe((field) => this.field = field);
            this.fieldSubscription1 = this.facadeService.getOperation(paramMap.get('operationId'))
                .subscribe((operation) => {
                    this.operation = operation;
                });
        });

    }

    ngOnDestroy(): void {

    }

}


