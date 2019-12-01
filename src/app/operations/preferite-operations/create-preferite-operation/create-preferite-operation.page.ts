import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacadeService} from '../../../common/facade.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-create-preferite-operation',
    templateUrl: './create-preferite-operation.page.html',
    styleUrls: ['./create-preferite-operation.page.scss'],
})
export class CreatePreferiteOperationPage implements OnInit {

    form: FormGroup;

    constructor(private facadeService: FacadeService, private navCtrl: NavController) {
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
    }

    onCreateOperation() {
        this.facadeService.createDeafaultOperation(this.form.value.name, this.form.value.description, new Date(this.form.value.date).toLocaleDateString(), this.form.value.operator);
        console.log(this.form);
        this.navCtrl.pop();
    }

}

