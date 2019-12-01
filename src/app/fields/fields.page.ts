import {Component, OnInit} from '@angular/core';
import {Field} from '../common/field.model';
import {Subscription} from 'rxjs';
import {FacadeService} from '../common/facade.service';

@Component({
    selector: 'app-fields',
    templateUrl: './fields.page.html',
    styleUrls: ['./fields.page.scss'],
})
export class FieldsPage implements OnInit {
    private seg: string;
    private loadedFields: Field[];
    private fieldSubscription: Subscription;
    private fieldSubscription1: Subscription;

    constructor(private facadeService: FacadeService) {
    }

    ngOnInit() {
        this.seg = 'list';
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
