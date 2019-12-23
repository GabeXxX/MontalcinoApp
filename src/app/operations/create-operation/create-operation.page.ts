import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Field} from '../../common/field.model';
import {FacadeService} from '../../common/facade.service';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {ShareStateService} from '../../common/share-state.service';

@Component({
    selector: 'app-create-operation',
    templateUrl: './create-operation.page.html',
    styleUrls: ['./create-operation.page.scss'],
})
export class CreateOperationPage implements OnInit {
    form: FormGroup;
    fields: Field[];
    defaultFieldId = '';
    defaultName = '';
    defaultDescription = '';
    defaultDate = '';
    defaultOperator = '';
    private isLoading = false;

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
            }),
            field: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            })

        });

        this.isLoading = true;
        this.facadeService.fields.subscribe((fields) => {
            this.fields = fields;
            this.defaultDate = this.shareStateService.data.defaultDate;
            this.defaultDescription = this.shareStateService.data.defaultDescription;
            this.defaultFieldId = this.shareStateService.data.defaultFieldId;
            this.defaultName = this.shareStateService.data.defaultName;
            this.defaultOperator = this.shareStateService.data.defaultOperator;
            this.shareStateService.clear();
            this.isLoading = false;
        });




    }


    onCreateOperation() {
        this.facadeService.createOperation(this.form.value.name,
            this.form.value.field,
            this.form.value.description,
            new Date(this.form.value.date).toLocaleDateString(),
            this.form.value.operator
        ).subscribe(() => {
            this.navController.pop();
        });

    }

    ngOnDestroy(): void {

    }

}
