import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {UpdateOperationPage} from './update-operation.page';

describe('UpdateOperationPage', () => {
    let component: UpdateOperationPage;
    let fixture: ComponentFixture<UpdateOperationPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpdateOperationPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(UpdateOperationPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
