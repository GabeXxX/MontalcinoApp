import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {CampiPage} from './campi.page';

describe('CampiPage', () => {
    let component: CampiPage;
    let fixture: ComponentFixture<CampiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [CampiPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

      fixture = TestBed.createComponent(CampiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
