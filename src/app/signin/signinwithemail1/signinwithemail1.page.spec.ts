import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Signinwithemail1Page } from './signinwithemail1.page';

describe('Signinwithemail1Page', () => {
  let component: Signinwithemail1Page;
  let fixture: ComponentFixture<Signinwithemail1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signinwithemail1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Signinwithemail1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
