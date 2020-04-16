import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CropdecidedPage } from './cropdecided.page';

describe('CropdecidedPage', () => {
  let component: CropdecidedPage;
  let fixture: ComponentFixture<CropdecidedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropdecidedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CropdecidedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
