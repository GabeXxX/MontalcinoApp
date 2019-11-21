import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {OperazioniPage} from './operazioni.page';

describe('OperazioniPage', () => {
    let component: OperazioniPage;
    let fixture: ComponentFixture<OperazioniPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OperazioniPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(OperazioniPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
