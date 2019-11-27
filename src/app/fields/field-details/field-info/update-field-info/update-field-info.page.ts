import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Field} from '../../../../common/field.model';
import {FacadeService} from '../../../../common/facade.service';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-update-field-info',
    templateUrl: './update-field-info.page.html',
    styleUrls: ['./update-field-info.page.scss'],
})
export class UpdateFieldInfoPage implements OnInit {

    form: FormGroup;
    field: Field;

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
            description: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.maxLength(180)]

            }),
            position: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.min(1)]

            })
        });

        this.activatedRoute.paramMap.subscribe(paramMap => {
            /*if (!paramMap.has('fieldId')) {
                this.navController.navigateBack('/fields');
                return;
            }
            this.field = this.facadeService.getField(paramMap.get('fieldId'));*/

        });
    }

}
