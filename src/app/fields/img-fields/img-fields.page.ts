import {Component, OnDestroy, OnInit} from '@angular/core';
import {Field} from '../../common/field.model';
import {FacadeService} from '../../common/facade.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-img-fields',
    templateUrl: './img-fields.page.html',
    styleUrls: ['./img-fields.page.scss'],
})
export class ImgFieldsPage implements OnInit, OnDestroy {
    private loadedFields: Field[];
    private fieldSubscription: Subscription;


    constructor(private facadeService: FacadeService) {
    }

    ngOnInit() {
        this.fieldSubscription = this.facadeService.fields.subscribe((field) => {
            this.loadedFields = field;
        });
    }

    ngOnDestroy(): void {

    }

    onDelete() {
    }

}
