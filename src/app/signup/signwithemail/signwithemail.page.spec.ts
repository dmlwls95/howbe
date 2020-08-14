import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignwithemailPage } from './signwithemail.page';

describe('SignwithemailPage', () => {
  let component: SignwithemailPage;
  let fixture: ComponentFixture<SignwithemailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignwithemailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignwithemailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
