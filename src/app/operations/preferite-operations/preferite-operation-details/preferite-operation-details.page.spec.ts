import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {PreferiteOperationDetailsPage} from './preferite-operation-details.page';

describe('PreferiteOperationDetailsPage', () => {
    let component: PreferiteOperationDetailsPage;
    let fixture: ComponentFixture<PreferiteOperationDetailsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PreferiteOperationDetailsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(PreferiteOperationDetailsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
