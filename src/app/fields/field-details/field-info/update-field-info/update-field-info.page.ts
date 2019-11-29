import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Field} from '../../../../common/field.model';
import {FacadeService} from '../../../../common/facade.service';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-update-field-info',
    templateUrl: './update-field-info.page.html',
    styleUrls: ['./update-field-info.page.scss'],
})
export class UpdateFieldInfoPage implements OnInit, OnDestroy {

    private form: FormGroup;
    private field: Field;
    private subscription: Subscription;
    private subscription1: Subscription;


    constructor(private facadeService: FacadeService,
                private activatedRoute: ActivatedRoute,
                private navController: NavController) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            position: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]

            }),
            description: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]

            }),
            area: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            perimeter: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            cultivation: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            owner: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            })

        });

        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('fieldId')) {
                this.navController.navigateBack('/fields');
                return;
            }
            this.subscription = this.facadeService.getField(paramMap.get('fieldId')).subscribe((field) => {
                this.field = field;
            });


        });
    }

    onUpdateField() {
        this.facadeService.updateField(this.field.id, this.form.value.name, this.form.value.position, this.form.value.description, this.field.imagePreviewUrl, this.form.value.cultivation, this.form.value.owner, this.form.value.area, this.form.value.perimeter).subscribe();
    }

    ngOnDestroy(): void {

    }

}
