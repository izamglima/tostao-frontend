import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyViewComponent } from './currency-view.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CurrencyViewComponent', () => {
  let component: CurrencyViewComponent;
  let fixture: ComponentFixture<CurrencyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyViewComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
