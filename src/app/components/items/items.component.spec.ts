import { ComponentFixture, TestBed } from '@angular/core/testing';

import { itemsComponent } from './items.component';

describe('ItemsComponent', () => {
  let component: itemsComponent;
  let fixture: ComponentFixture<itemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ itemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(itemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
