import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {NewFieldPage} from './new-field.page';

describe('NewFieldPage', () => {
    let component: NewFieldPage;
    let fixture: ComponentFixture<NewFieldPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewFieldPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(NewFieldPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
