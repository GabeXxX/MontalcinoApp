import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {PreferiteOperationsModalPage} from './preferite-operations-modal.page';

describe('PreferiteOperationsModalPage', () => {
    let component: PreferiteOperationsModalPage;
    let fixture: ComponentFixture<PreferiteOperationsModalPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PreferiteOperationsModalPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(PreferiteOperationsModalPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
