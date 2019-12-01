import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {UpdateOperationDetailsPage} from './update-operation-details.page';

describe('UpdateOperationDetailsPage', () => {
    let component: UpdateOperationDetailsPage;
    let fixture: ComponentFixture<UpdateOperationDetailsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpdateOperationDetailsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(UpdateOperationDetailsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
