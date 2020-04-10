import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YieldPage } from './yield.page';

describe('YieldPage', () => {
  let component: YieldPage;
  let fixture: ComponentFixture<YieldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YieldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
