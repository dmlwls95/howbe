import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Signwithemail3Page } from './signwithemail3.page';

describe('Signwithemail3Page', () => {
  let component: Signwithemail3Page;
  let fixture: ComponentFixture<Signwithemail3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signwithemail3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Signwithemail3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
