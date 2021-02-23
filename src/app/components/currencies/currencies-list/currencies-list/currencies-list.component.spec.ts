import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CurrenciesListComponent } from './currencies-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api/api.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CurrenciesListComponent', () => {
  let component: CurrenciesListComponent;
  let fixture: ComponentFixture<CurrenciesListComponent>;
  let service: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrenciesListComponent],
      imports: [HttpClientTestingModule],
      providers: [ApiService],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ApiService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('On init currencies should be loaded', fakeAsync(() => {
    spyOn(service, 'getCurrencies').and.returnValue(of({data: [{code: 'Eur', id: 123}]}).pipe(delay(1)));

    component.ngOnInit();

    expect(service.getCurrencies).toHaveBeenCalled();
    expect(component.currencies).toEqual([]);

    // Simulates the asynchronous passage of time
    tick(1);

    expect(component.currencies).toEqual([{code: 'Eur', id: 123}]);
  }));

  it('it should clean currencies filter', () => {
    component.filterCurrency = 'Eur';
    component.cleanFilter();
    expect(component.filterCurrency).toEqual(null);
  });

  it('it should filter currencies', () => {
    component.currencies = [{attributes: {code: 'EUR', id: 123 }}, {attributes: {code: 'BRL', id: 1234 }}];
    component.filterItem('eur');
    expect(component.filteredItems.length).toBe(1);
  });

  it('it should filter currencies with no value passed', () => {
    component.currencies = [{attributes: {code: 'EUR', id: 123 }}, {attributes: {code: 'BRL', id: 1234 }}];
    component.filterItem('');
    expect(component.filteredItems.length).toBe(2);
  });

});
