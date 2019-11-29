import {Component, OnInit} from '@angular/core';
import {Field} from '../../../common/field.model';
import {FacadeService} from '../../../common/facade.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionSheetController, NavController} from '@ionic/angular';
import {Operation} from '../../../common/operation.model';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-field-operations',
    templateUrl: './field-operations.page.html',
    styleUrls: ['./field-operations.page.scss'],
})
export class FieldOperationsPage implements OnInit {
    private operations: Operation[];
    private field: Field;
    private fieldSubscription: Subscription;
    private subscription1: Subscription;


    constructor(private facadeService: FacadeService,
                private activatedRoute: ActivatedRoute,
                private navController: NavController,
                private actionSheetController: ActionSheetController,
                private router: Router,
    ) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('fieldId')) {
                this.navController.navigateBack('/fields');
                return;
            }
            this.fieldSubscription = this.facadeService.getField(paramMap.get('fieldId'))
                .subscribe((field) => this.field = field);

            this.facadeService.operations.subscribe((operations) => {
                console.log(operations);
                this.operations = this.facadeService.getFieldOperations(this.field.id, operations);
                console.log(this.operations);
            });

        });

    }

    ngOnDestroy(): void {

    }

    onDelete(operationId: string) {
        this.subscription1 = this.facadeService.removeOperation(operationId).subscribe();

    }

    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Aggiungi nuova operazione',
            buttons: [{
                text: 'Nuova Operazione vuota',
                role: 'destructive',
                icon: 'document',
                handler: () => {
                    console.log('new empty operation clicked');
                    this.router.navigate(['/', 'fields', this.field.id, 'field-operations', 'create-operation']);
                }
            }, {
                text: 'Operazioni preferite',
                icon: 'heart',
                role: 'destructive',
                handler: () => {
                    this.router.navigate(['/', 'fields', this.field.id, 'field-operations', 'preferite-operations-modal']);
                }

            }]
        });
        await actionSheet.present();
    }

}
