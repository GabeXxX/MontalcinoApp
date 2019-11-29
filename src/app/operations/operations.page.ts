import {Component, OnInit} from '@angular/core';
import {FacadeService} from '../common/facade.service';
import {Operation} from '../common/operation.model';
import {Field} from '../common/field.model';

@Component({
    selector: 'app-operations',
    templateUrl: './operations.page.html',
    styleUrls: ['./operations.page.scss'],
})
export class OperationsPage implements OnInit {
    private operations: Operation[];
    private fields: Field[];

    constructor(private facadeService: FacadeService) {
    }

    ngOnInit() {
        this.facadeService.operations.subscribe((operations) => {
            this.operations = operations;
        });

        this.facadeService.fields.subscribe((fields) => {
            this.fields = fields;
        });
    }

}
