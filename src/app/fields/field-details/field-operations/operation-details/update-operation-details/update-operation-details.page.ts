import {Component, OnInit} from '@angular/core';
import {Operation} from '../../../../../common/operation.model';
import {FacadeService} from '../../../../../common/facade.service';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-update-operation-details',
    templateUrl: './update-operation-details.page.html',
    styleUrls: ['./update-operation-details.page.scss'],
})
export class UpdateOperationDetailsPage implements OnInit {
    operation: Operation;
    form: FormGroup;
    defDate: string;
    defName: string;
    defDescription: string;
    defOperator: string;

    defOperationsOptions: string [] = ['Operazione 1', 'Operazione 2', 'Operazione 3', 'Operazione 4', 'Operazione 5'];


    constructor(private facadeService: FacadeService, private navController: NavController, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            description: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]

            }),
            date: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]

            }),
            operator: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            })

        });

        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('operationId') || !paramMap.has('fieldId')) {
                this.navController.navigateBack('/fields');
                return;
            }
            this.facadeService.getOperation(paramMap.get('operationId')).subscribe((operation) => {
                this.operation = operation;
            });
        });

        this.defDate = this.operation.date;
    }

    onUpdateOperation() {
        var date = new Date(this.form.value.date);

        this.defDate = this.operation.date;
        this.defDescription = this.operation.description;
        this.defName = this.operation.name;
        this.defOperator = this.operation.operator;

        this.facadeService.updateOperation(this.operation.operationId, this.form.value.name, this.form.value.description, new Date(this.form.value.date).toLocaleDateString(), this.form.value.operator).subscribe();
    }
}
