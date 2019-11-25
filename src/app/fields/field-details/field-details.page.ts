import {Component, OnInit} from '@angular/core';
import {FacadeService} from '../../common/facade.service';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Field} from '../../common/field.model';

@Component({
    selector: 'app-field-details',
    templateUrl: './field-details.page.html',
    styleUrls: ['./field-details.page.scss'],
})
export class FieldDetailsPage implements OnInit {
    field: Field;

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
            this.field = this.facadeService.getField(paramMap.get('fieldId'));

        });
    }

}
