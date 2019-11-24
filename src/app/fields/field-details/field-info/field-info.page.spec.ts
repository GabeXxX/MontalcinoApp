import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {FieldInfoPage} from './field-info.page';

describe('FieldInfoPage', () => {
    let component: FieldInfoPage;
    let fixture: ComponentFixture<FieldInfoPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FieldInfoPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(FieldInfoPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
