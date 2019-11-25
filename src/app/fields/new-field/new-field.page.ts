import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacadeService} from '../../common/facade.service';

@Component({
    selector: 'app-new-field',
    templateUrl: './new-field.page.html',
    styleUrls: ['./new-field.page.scss'],
})
export class NewFieldPage implements OnInit {

    form: FormGroup;
    tmpFieldId = '5';

    constructor(private facadeService: FacadeService) {
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
        this.facadeService.createField(this.form.value.name, this.form.value.description, this.tmpFieldId, this.form.value.position);


    }

}
