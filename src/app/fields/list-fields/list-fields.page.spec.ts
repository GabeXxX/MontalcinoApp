import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ListFieldsPage} from './list-fields.page';

describe('ListFieldsPage', () => {
    let component: ListFieldsPage;
    let fixture: ComponentFixture<ListFieldsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListFieldsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ListFieldsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
