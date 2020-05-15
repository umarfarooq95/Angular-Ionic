import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceipesPage } from './receipes.page';

describe('ReceipesPage', () => {
  let component: ReceipesPage;
  let fixture: ComponentFixture<ReceipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
