import {Component, OnDestroy, OnInit} from '@angular/core';
import {Field} from '../../common/field.model';
import {FacadeService} from '../../common/facade.service';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-list-fields',
    templateUrl: './list-fields.page.html',
    styleUrls: ['./list-fields.page.scss'],
})
export class ListFieldsPage implements OnInit, OnDestroy {
    private loadedFields: Field[];
    private fieldSubscription: Subscription;
    private fieldSubscription1: Subscription;

    constructor(private facadeService: FacadeService) {
    }

    ngOnInit() {
        this.fieldSubscription = this.facadeService.fields.subscribe((fields) => {
            this.loadedFields = fields;
        });
    }

    ngOnDestroy(): void {

    }

    onDelete(fieldId: string) {
        this.fieldSubscription1 = this.facadeService.removeField(fieldId).subscribe();
    }

}
