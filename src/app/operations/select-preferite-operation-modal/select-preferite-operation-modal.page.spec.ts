import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {SelectPreferiteOperationModalPage} from './select-preferite-operation-modal.page';

describe('SelectPreferiteOperationModalPage', () => {
    let component: SelectPreferiteOperationModalPage;
    let fixture: ComponentFixture<SelectPreferiteOperationModalPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SelectPreferiteOperationModalPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(SelectPreferiteOperationModalPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
