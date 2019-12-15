import {Component, OnInit} from '@angular/core';
import {FacadeService} from '../../common/facade.service';
import {Operation} from '../../common/operation.model';

@Component({
    selector: 'app-preferite-operations',
    templateUrl: './preferite-operations.page.html',
    styleUrls: ['./preferite-operations.page.scss'],
})
export class PreferiteOperationsPage implements OnInit {
    preferiteOperations: Operation[];

    constructor(private facadeService: FacadeService) {
    }

    ngOnInit() {
        this.facadeService.defaultOperations.subscribe((operations) => {
            this.preferiteOperations = operations;
        });
    }

    onDelete(operationId: string) {
        this.facadeService.removeDefaultOperation(operationId).subscribe();

    }

    ionViewWillEnter() {
        this.facadeService.fetchDefaultOperations().subscribe();
    }

}
