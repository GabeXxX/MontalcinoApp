import {Component, OnInit} from '@angular/core';
import {Operation} from '../../../common/operation.model';
import {FacadeService} from '../../../common/facade.service';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-preferite-operation-details',
    templateUrl: './preferite-operation-details.page.html',
    styleUrls: ['./preferite-operation-details.page.scss'],
})
export class PreferiteOperationDetailsPage implements OnInit {
    private operation: Operation;

    constructor(private facadeService: FacadeService, private activatedRoute: ActivatedRoute, private navController: NavController) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('preferiteOperationId')) {
                this.navController.navigateBack('/operations');
                return;
            }
            this.facadeService.getDefaultOperation(paramMap.get('preferiteOperationId'))
                .subscribe((operation) => {
                    this.operation = operation;
                });
        });
    }

}
