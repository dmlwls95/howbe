import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Signwithemail4Page } from './signwithemail4.page';

describe('Signwithemail4Page', () => {
  let component: Signwithemail4Page;
  let fixture: ComponentFixture<Signwithemail4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signwithemail4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Signwithemail4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
