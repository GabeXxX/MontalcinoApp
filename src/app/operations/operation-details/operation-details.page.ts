import {Component, OnInit} from '@angular/core';
import {FacadeService} from '../../common/facade.service';
import {ActivatedRoute} from '@angular/router';
import {Operation} from '../../common/operation.model';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-operation-details',
    templateUrl: './operation-details.page.html',
    styleUrls: ['./operation-details.page.scss'],
})
export class OperationDetailsPage implements OnInit {
    private operation: Operation;
    private isLoading = false;

    constructor(private facadeService: FacadeService, private activatedRoute: ActivatedRoute, private navController: NavController) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('operationId')) {
                this.navController.navigateBack('/operations');
                return;
            }
            this.isLoading = true;
            this.facadeService.getOperation(paramMap.get('operationId'))
                .subscribe((operation) => {
                    this.operation = operation;
                    this.isLoading = false;
                });
        });
    }

}
