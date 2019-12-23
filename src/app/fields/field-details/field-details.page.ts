import {Component, OnDestroy, OnInit} from '@angular/core';
import {FacadeService} from '../../common/facade.service';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Subscription} from 'rxjs';
import {Field} from '../../common/field.model';

@Component({
    selector: 'app-field-details',
    templateUrl: './field-details.page.html',
    styleUrls: ['./field-details.page.scss'],
})
export class FieldDetailsPage implements OnInit, OnDestroy {
    private field: Field;
    private fieldSubscription: Subscription;
    private isLoading = true;


    constructor(private facadeService: FacadeService,
                private activatedRoute: ActivatedRoute,
                private navController: NavController) {
    }

    ngOnInit() {

        console.log(this.field);
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('fieldId')) {
                this.navController.navigateBack('/fields');
                return;
            }
            this.isLoading = true;
            this.fieldSubscription = this.facadeService.getField(paramMap.get('fieldId'))
                .subscribe((field: Field) => {
                    this.field = field;
                    console.log(this.field);
                    this.isLoading = false;
                });

        });

    }


    ngOnDestroy(): void {
        this.fieldSubscription.unsubscribe();
    }

}
