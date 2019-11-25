import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {UpdateFieldInfoPage} from './update-field-info.page';

describe('UpdateFieldInfoPage', () => {
    let component: UpdateFieldInfoPage;
    let fixture: ComponentFixture<UpdateFieldInfoPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpdateFieldInfoPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(UpdateFieldInfoPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
