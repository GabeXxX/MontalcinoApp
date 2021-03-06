import {Component, OnInit} from '@angular/core';
import {FacadeService} from '../../../common/facade.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionSheetController, ModalController, NavController} from '@ionic/angular';
import {Operation} from '../../../common/operation.model';
import {SelectPreferiteOperationModalPage} from '../../../operations/select-preferite-operation-modal/select-preferite-operation-modal.page';
import {ShareStateService} from '../../../common/share-state.service';

@Component({
    selector: 'app-field-operations',
    templateUrl: './field-operations.page.html',
    styleUrls: ['./field-operations.page.scss'],
})
export class FieldOperationsPage implements OnInit {
    private operations: Operation[];
    private field: any;
    private seg: string;
    private isLoadingOperations = false;
    private isLoadingFields = false;


    constructor(private facadeService: FacadeService,
                private activatedRoute: ActivatedRoute,
                private navController: NavController,
                private actionSheetController: ActionSheetController,
                private router: Router,
                private modalController: ModalController,
                private shareState: ShareStateService
    ) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('fieldId')) {
                this.navController.navigateBack('/fields');
                return;
            }
            this.isLoadingFields = true;
            this.isLoadingOperations = true;
            this.facadeService.getField(paramMap.get('fieldId'))
                .subscribe((field) => {
                    this.field = field;
                    this.isLoadingFields = false;

                    this.facadeService.operations.subscribe((operations) => {
                        this.operations = this.facadeService.getFieldOperations(this.field.id, operations);
                        this.isLoadingOperations = false;
                    });
                });



        });

        this.seg = 'all';

    }

    ionViewWillEnter() {
        this.facadeService.fetchOperations().subscribe();
    }

    ngOnDestroy(): void {

    }

    onDelete(operationId: string) {
        this.facadeService.removeOperation(operationId).subscribe();

    }

    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Aggiungi nuova operazione',
            buttons: [{
                text: 'Nuova Operazione vuota',
                role: 'destructive',
                icon: 'document',
                handler: () => {
                    this.shareState.data.defaultFieldId = this.field.id;
                    this.router.navigate(['/', 'operations', 'create-operation']);
                }
            }, {
                text: 'Operazioni preferite',
                icon: 'heart',
                role: 'destructive',
                handler: () => {
                    this.shareState.data.defaultFieldId = this.field.id;
                    this.presentModal();
                }

            }]
        });
        await actionSheet.present();
    }

    onDetails(operationId: string) {
        this.router.navigate(['/', 'operations', operationId]);
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: SelectPreferiteOperationModalPage,
            componentProps: {
                fieldId: this.field.id //pass data to modal
            }
        });
        return await modal.present();
    }

    onCheckBox(operationId: string) {
        this.facadeService.operationIsDone(operationId).subscribe();
    }


}
