import {Component, OnDestroy, OnInit} from '@angular/core';
import {FacadeService} from '../../../../common/facade.service';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Field} from '../../../../common/field.model';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ShareStateService} from '../../../../common/share-state.service';

@Component({
    selector: 'app-create-operation',
    templateUrl: './create-operation.page.html',
    styleUrls: ['./create-operation.page.scss'],
})
export class CreateOperationPage implements OnInit, OnDestroy {
    form: FormGroup;
    private field: Field;
    private subscription: Subscription;
    private defName: string;
    private defDescription: string;
    private defOperator: string;
    private isDone: boolean = true;

    constructor(private facadeService: FacadeService,
                private activatedRoute: ActivatedRoute,
                private navController: NavController,
                private shareStateService: ShareStateService) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            description: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]

            }),
            date: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]

            }),
            operator: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            })

        });

        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('fieldId')) {
                this.navController.navigateBack('/fields');
                return;
            }
            this.subscription = this.facadeService.getField(paramMap.get('fieldId'))
                .subscribe((field) => {
                    this.field = field;
                });
        });

        if (this.shareStateService.data !== null) {
            this.defName = this.shareStateService.data[0];
            this.defDescription = this.shareStateService.data[1];
            this.defOperator = this.shareStateService.data[2];
            this.shareStateService.data = null;
        }

    }


    onCreateOperation() {
        this.facadeService.createOperation(this.form.value.name, this.field.id, this.form.value.description, new Date(this.form.value.date).toLocaleDateString(), this.form.value.operator);
        console.log(this.form);
    }

    ngOnDestroy(): void {

    }

}
