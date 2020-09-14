import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Signwithemail2Page } from './signwithemail2.page';

describe('Signwithemail2Page', () => {
  let component: Signwithemail2Page;
  let fixture: ComponentFixture<Signwithemail2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signwithemail2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Signwithemail2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
