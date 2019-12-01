import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacadeService} from '../../common/facade.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-new-field',
    templateUrl: './new-field.page.html',
    styleUrls: ['./new-field.page.scss'],
})
export class NewFieldPage implements OnInit {

    form: FormGroup;

    constructor(private facadeService: FacadeService, private navCtrl: NavController) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            position: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.min(1)]

            }),
            description: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.maxLength(180)]

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
    }


    onCreateField() {
        console.log(this.form);
        this.facadeService.createField(this.form.value.name,
            this.form.value.position,
            this.form.value.description,
            '/assets/fieldPreview.jpg',
            this.form.value.cultivation,
            this.form.value.owner,
            this.form.value.area,
            this.form.value.perimeter);

        this.navCtrl.pop();
    }

}
