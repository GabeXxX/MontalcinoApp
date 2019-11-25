import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {CreateOperationPage} from './create-operation.page';

describe('CreateOperationPage', () => {
    let component: CreateOperationPage;
    let fixture: ComponentFixture<CreateOperationPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreateOperationPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(CreateOperationPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
