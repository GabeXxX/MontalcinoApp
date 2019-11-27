import {Component, OnDestroy, OnInit} from '@angular/core';
import {FacadeService} from '../../common/facade.service';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Field} from '../../common/field.model';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-field-details',
    templateUrl: './field-details.page.html',
    styleUrls: ['./field-details.page.scss'],
})
export class FieldDetailsPage implements OnInit, OnDestroy {
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
