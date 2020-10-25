import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrenciesListComponent } from './currencies-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CurrenciesListComponent', () => {
  let component: CurrenciesListComponent;
  let fixture: ComponentFixture<CurrenciesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenciesListComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
