import {Component, OnInit} from '@angular/core';
import {FieldsService} from '../fields.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-new-field',
    templateUrl: './new-field.page.html',
    styleUrls: ['./new-field.page.scss'],
})
export class NewFieldPage implements OnInit {

    form: FormGroup;

    constructor(private fieldsService: FieldsService) {
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
    }


    onCreateField() {
        console.log(this.form);
        this.fieldsService.addField(this.form.value.name, this.form.value.description, this.form.value.position);
        console.log(this.fieldsService.fields);

    }

}
