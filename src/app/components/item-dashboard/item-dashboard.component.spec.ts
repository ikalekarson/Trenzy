import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDashboardComponent } from './item-dashboard.component';

describe('ItemDashboardComponent', () => {
  let component: ItemDashboardComponent;
  let fixture: ComponentFixture<ItemDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDashboardComponent]
    });
    fixture = TestBed.createComponent(ItemDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
