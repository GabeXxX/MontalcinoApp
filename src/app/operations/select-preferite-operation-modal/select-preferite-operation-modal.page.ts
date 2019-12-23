import {Component, OnInit} from '@angular/core';
import {Operation} from '../../common/operation.model';
import {FacadeService} from '../../common/facade.service';
import {ShareStateService} from '../../common/share-state.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalController, NavController} from '@ionic/angular';

@Component({
    selector: 'app-select-preferite-operation-modal',
    templateUrl: './select-preferite-operation-modal.page.html',
    styleUrls: ['./select-preferite-operation-modal.page.scss'],
})
export class SelectPreferiteOperationModalPage implements OnInit {
    fieldId;
    private preferiteOperations: Operation[];
    private isLoading = false;

    constructor(private facadeService: FacadeService,
                private shareStateService: ShareStateService,
                private activatedRoute: ActivatedRoute,
                private navCtrl: NavController,
                private modalCtrl: ModalController,
                private router: Router) {
    }

    ngOnInit() {

        this.isLoading = true;
        this.facadeService.defaultOperations.subscribe((operations) => {
            this.preferiteOperations = operations;
            this.isLoading = false;
        });
    }

    ionViewWillEnter() {
        this.facadeService.fetchDefaultOperations().subscribe();
    }

    dismissModal() {
        this.modalCtrl.dismiss();
    }

    onSelectPreferite(operationId: string) {
        this.facadeService.getDefaultOperation(operationId).subscribe((operation) => {
            this.shareStateService.data.defaultDate = new Date().toLocaleDateString();
            this.shareStateService.data.defaultOperator = operation.operator;
            this.shareStateService.data.defaultName = operation.name;
            this.shareStateService.data.defaultDescription = operation.description;
            this.router.navigateByUrl('/operations/create-operation');
            this.dismissModal();
        });

    }

}
