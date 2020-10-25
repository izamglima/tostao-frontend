import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PriceHistoryComponent } from './price-history.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PriceHistoryComponent', () => {
  let component: PriceHistoryComponent;
  let fixture: ComponentFixture<PriceHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceHistoryComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
