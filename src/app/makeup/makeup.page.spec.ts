import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeupPage } from './makeup.page';

describe('MakeupPage', () => {
  let component: MakeupPage;
  let fixture: ComponentFixture<MakeupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
