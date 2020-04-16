import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CropundecidedPage } from './cropundecided.page';

describe('CropundecidedPage', () => {
  let component: CropundecidedPage;
  let fixture: ComponentFixture<CropundecidedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropundecidedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CropundecidedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
