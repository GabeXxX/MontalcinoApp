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

        this.facadeService.fields.subscribe((fields) => {
            this.fields = fields;
        });


    }


    onCreateOperation() {
        this.facadeService.createOperation(this.form.value.name, this.form.value.field, this.form.value.description, new Date(this.form.value.date).toLocaleDateString(), this.form.value.operator);
        console.log(this.form);
        this.navController.pop();
    }

    ngOnDestroy(): void {

    }

}
