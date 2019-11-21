import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {SegnalazioniPage} from './segnalazioni.page';

describe('SegnalazioniPage', () => {
    let component: SegnalazioniPage;
    let fixture: ComponentFixture<SegnalazioniPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SegnalazioniPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(SegnalazioniPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
