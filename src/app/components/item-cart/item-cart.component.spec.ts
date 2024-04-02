import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCartComponent } from './item-cart.component';

describe('ItemCartComponent', () => {
  let component: ItemCartComponent;
  let fixture: ComponentFixture<ItemCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCartComponent]
    });
    fixture = TestBed.createComponent(ItemCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
