import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {CreatePreferiteOperationPage} from './create-preferite-operation.page';

describe('CreatePreferiteOperationPage', () => {
    let component: CreatePreferiteOperationPage;
    let fixture: ComponentFixture<CreatePreferiteOperationPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreatePreferiteOperationPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(CreatePreferiteOperationPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
