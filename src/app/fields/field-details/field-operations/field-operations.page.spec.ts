import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {FieldOperationsPage} from './field-operations.page';

describe('FieldOperationsPage', () => {
    let component: FieldOperationsPage;
    let fixture: ComponentFixture<FieldOperationsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FieldOperationsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(FieldOperationsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
