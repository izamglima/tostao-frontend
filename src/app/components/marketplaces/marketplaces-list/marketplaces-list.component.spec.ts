import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MarketplacesListComponent } from './marketplaces-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api/api.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MarketplacesListComponent', () => {
  let component: MarketplacesListComponent;
  let fixture: ComponentFixture<MarketplacesListComponent>;
  let service: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarketplacesListComponent],
      imports: [HttpClientTestingModule],
      providers: [ApiService],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplacesListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ApiService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('On init marketplaces should be loaded', fakeAsync(() => {
    spyOn(service, 'getMarketplaces').and.returnValue(of({data: [{name: 'Dalben', id: 123}]}).pipe(delay(1)));

    component.ngOnInit();

    expect(service.getMarketplaces).toHaveBeenCalled();
    expect(component.marketplaces).toEqual([]);

    // Simulates the asynchronous passage of time
    tick(1);

    expect(component.marketplaces).toEqual([{name: 'Dalben', id: 123}]);
  }));

  it('it should clean marketplaces filter', () => {
    component.filterMarketplace = 'Jumbo';
    component.cleanFilter();
    expect(component.filterMarketplace).toEqual(null);
  });

  it('it should filter marketplaces', () => {
    component.marketplaces = [{attributes: {name: 'Dalben', id: 123 }}, {attributes: {name: 'Jumbo', id: 1234 }}];
    component.filterItem('Jumbo');
    expect(component.filteredItems.length).toBe(1);
  });

  it('it should filter marketplaces with no value passed', () => {
    component.marketplaces = [{attributes: {name: 'Dalben', id: 123 }}, {attributes: {name: 'Jumbo', id: 1234 }}];
    component.filterItem('');
    expect(component.filteredItems.length).toBe(2);
  });

});
