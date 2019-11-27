import {Component, OnInit} from '@angular/core';
import {Field} from '../../../common/field.model';
import {FacadeService} from '../../../common/facade.service';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-field-info',
    templateUrl: './field-info.page.html',
    styleUrls: ['./field-info.page.scss'],
})
export class FieldInfoPage implements OnInit {
    private field: Field;
    private fieldSubscription: Subscription;


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
            this.fieldSubscription = this.facadeService.getField(paramMap.get('fieldId'))
                .subscribe((field) => {
                    this.field = field;
                });

        });
    }

    ngOnDestroy(): void {
        this.fieldSubscription.unsubscribe();
    }
}
