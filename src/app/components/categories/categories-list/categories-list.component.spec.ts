import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CategoriesListComponent } from './categories-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api/api.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CategoriesListComponent', () => {
  let component: CategoriesListComponent;
  let fixture: ComponentFixture<CategoriesListComponent>;
  let service: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesListComponent],
      imports: [HttpClientTestingModule],
      providers: [ApiService],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ApiService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('On init categories should be loaded', fakeAsync(() => {
    spyOn(service, 'getCategories').and.returnValue(of({data: [{name: 'Supermercado', id: 123}]}).pipe(delay(1)));

    component.ngOnInit();

    expect(service.getCategories).toHaveBeenCalled();
    expect(component.categories).toEqual([]);

    // Simulates the asynchronous passage of time
    tick(1);

    expect(component.categories).toEqual([{name: 'Supermercado', id: 123}]);
  }));

  it('it should clean categories filter', () => {
    component.filterCategory = 'supermercado';
    component.cleanFilter();
    expect(component.filterCategory).toEqual(null);
  });

  it('it should filter categories', () => {
    component.categories = [{attributes: {name: 'Supermercado', id: 123 }}, {attributes: {name: 'Empresa', id: 1234 }}];
    component.filterItem('supermercado');
    expect(component.filteredItems.length).toBe(1);
  });

  it('it should filter categories with no value passed', () => {
    component.categories = [{attributes: {name: 'Supermercado', id: 123 }}, {attributes: {name: 'Empresa', id: 1234 }}];
    component.filterItem('');
    expect(component.filteredItems.length).toBe(2);
  });

});
