import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Signinwithemail2Page } from './signinwithemail2.page';

describe('Signinwithemail2Page', () => {
  let component: Signinwithemail2Page;
  let fixture: ComponentFixture<Signinwithemail2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signinwithemail2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Signinwithemail2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
