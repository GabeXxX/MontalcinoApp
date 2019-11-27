import {Component, OnInit} from '@angular/core';
import {Field} from '../../../common/field.model';
import {FacadeService} from '../../../common/facade.service';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Operation} from '../../../common/operation.model';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-field-operations',
    templateUrl: './field-operations.page.html',
    styleUrls: ['./field-operations.page.scss'],
})
export class FieldOperationsPage implements OnInit {
    private operations: Operation[];
    private field: Field;
    private fieldSubscription: Subscription;
    private operationSubscription: Subscription;


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
            this.fieldSubscription = this.facadeService.getField(paramMap.get('fieldId'))
                .subscribe((field) => this.field = field);
            this.operationSubscription = this.facadeService.getFieldOperations(paramMap.get('fieldId'))
                .subscribe((operations: Operation[]) => {
                    console.log(operations);
                    this.operations = operations;
                });

        });

    }

    ngOnDestroy(): void {
        this.fieldSubscription.unsubscribe();
        this.operationSubscription.unsubscribe();
    }

    onDelete() {
    }
}
