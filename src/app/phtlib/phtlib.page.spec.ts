import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhtlibPage } from './phtlib.page';

describe('PhtlibPage', () => {
  let component: PhtlibPage;
  let fixture: ComponentFixture<PhtlibPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhtlibPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhtlibPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
