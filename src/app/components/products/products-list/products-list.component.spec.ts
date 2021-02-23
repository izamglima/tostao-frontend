import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProductsListComponent } from './products-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api/api.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let service: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      imports: [HttpClientTestingModule],
      providers: [ApiService],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ApiService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('On init products should be loaded', fakeAsync(() => {
    spyOn(service, 'getProducts').and.returnValue(of({data: [{name: 'Bananen', id: 123}]}).pipe(delay(1)));

    component.ngOnInit();

    expect(service.getProducts).toHaveBeenCalled();
    expect(component.products).toEqual([]);

    // Simulates the asynchronous passage of time
    tick(1);

    expect(component.products).toEqual([{name: 'Bananen', id: 123}]);
  }));

  it('it should clean products filter', () => {
    component.filterProducts = 'Appel';
    component.cleanFilter();
    expect(component.filterProducts).toEqual(null);
  });

  it('it should filter products', () => {
    component.products = [{attributes: {name: 'Bananen', id: 123 }}, {attributes: {name: 'Appel', id: 1234 }}];
    component.filterItem('Appel');
    expect(component.filteredItems.length).toBe(1);
  });

  it('it should filter products with no value passed', () => {
    component.products = [{attributes: {name: 'Bananen', id: 123 }}, {attributes: {name: 'Appel', id: 1234 }}];
    component.filterItem('');
    expect(component.filteredItems.length).toBe(2);
  });

});
