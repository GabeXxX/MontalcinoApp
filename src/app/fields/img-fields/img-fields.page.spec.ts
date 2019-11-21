import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ImgFieldsPage} from './img-fields.page';

describe('ImgFieldsPage', () => {
    let component: ImgFieldsPage;
    let fixture: ComponentFixture<ImgFieldsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ImgFieldsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ImgFieldsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
