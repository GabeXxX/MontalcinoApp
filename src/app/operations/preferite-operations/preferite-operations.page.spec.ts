import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {PreferiteOperationsPage} from './preferite-operations.page';

describe('PreferiteOperationsPage', () => {
    let component: PreferiteOperationsPage;
    let fixture: ComponentFixture<PreferiteOperationsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PreferiteOperationsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(PreferiteOperationsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
