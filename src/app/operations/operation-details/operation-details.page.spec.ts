import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {OperationDetailsPage} from './operation-details.page';

describe('OperationDetailsPage', () => {
    let component: OperationDetailsPage;
    let fixture: ComponentFixture<OperationDetailsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OperationDetailsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(OperationDetailsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
