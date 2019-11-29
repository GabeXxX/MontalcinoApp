import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Operation} from '../../../../common/operation.model';
import {FacadeService} from '../../../../common/facade.service';
import {Subscription} from 'rxjs';
import {ShareStateService} from '../../../../common/share-state.service';
import {ActivatedRoute} from '@angular/router';
import {Field} from '../../../../common/field.model';


@Component({
    selector: 'app-preferite-operations-modal',
    templateUrl: './preferite-operations-modal.page.html',
    styleUrls: ['./preferite-operations-modal.page.scss'],
})
export class PreferiteOperationsModalPage implements OnInit {
    private preferiteOperations: Operation[];
    private subscription: Subscription;
    private field: Field;

    constructor(private facadeService: FacadeService,
                private shareStateService: ShareStateService,
                private activatedRoute: ActivatedRoute,
                private navCtrl: NavController) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            console.log(paramMap.get('fieldId'));
            this.facadeService.getField(paramMap.get('fieldId'))
                .subscribe((field) => this.field = field);
        });


        this.subscription = this.facadeService.defaultOperations.subscribe((operations) => {
            this.preferiteOperations = operations;
        });
    }

    dismissModal() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.navCtrl.navigateBack(['/fields/', this.field.id, 'field-operations']);
    }

    onDelete(operationId: string) {
        this.facadeService.removeDefaultOperation(operationId).subscribe();
    }

    onSelectPreferite(operationId: string) {
        this.facadeService.getDefaultOperation(operationId).subscribe((operation) => {
            this.shareStateService.data = [operation.name, operation.description, operation.operator];
        });


    }

}
