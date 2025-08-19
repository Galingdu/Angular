import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkCartComponent } from './drink-cart.component';

describe('DrinkCartComponent', () => {
  let component: DrinkCartComponent;
  let fixture: ComponentFixture<DrinkCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
