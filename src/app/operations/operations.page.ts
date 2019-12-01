import {Component, OnInit} from '@angular/core';
import {FacadeService} from '../common/facade.service';
import {Operation} from '../common/operation.model';
import {Field} from '../common/field.model';
import {Router} from '@angular/router';
import {ActionSheetController, ModalController} from '@ionic/angular';
import {SelectPreferiteOperationModalPage} from './select-preferite-operation-modal/select-preferite-operation-modal.page';

@Component({
    selector: 'app-operations',
    templateUrl: './operations.page.html',
    styleUrls: ['./operations.page.scss'],
})
export class OperationsPage implements OnInit {
    private operations: Operation[];
    private fields: Field[];
    private seg: string;

    constructor(private facadeService: FacadeService, private router: Router,
                private actionSheetController: ActionSheetController, private modalController: ModalController) {
    }

    ngOnInit() {
        this.facadeService.operations.subscribe((operations) => {
            this.operations = operations;
        });

        this.facadeService.fields.subscribe((fields) => {
            this.fields = fields;
        });

        this.seg = 'all';
    }

    onDelete(operationId: string) {
        this.facadeService.removeOperation(operationId).subscribe();
    }

    onDetails(fieldId: string, operationId: string) {
        this.router.navigate(['/', 'operations', operationId]);
    }

    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Nuova Operazione',
            buttons: [{
                text: 'Crea nuova',
                role: 'destructive',
                icon: 'document',
                handler: () => {
                    this.router.navigateByUrl('/operations/create-operation');
                }
            }, {
                text: 'Seleziona da preferite',
                role: 'destructive',
                icon: 'star',
                handler: () => {
                    this.presentModal();
                }
            }
            ]
        });
        await actionSheet.present();
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: SelectPreferiteOperationModalPage
        });
        return await modal.present();
    }

}




