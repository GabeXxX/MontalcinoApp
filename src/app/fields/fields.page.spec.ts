import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {FieldsPage} from './fields.page';

describe('FieldsPage', () => {
    let component: FieldsPage;
    let fixture: ComponentFixture<FieldsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FieldsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(FieldsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
