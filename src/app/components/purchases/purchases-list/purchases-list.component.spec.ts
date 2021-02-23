import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PurchasesListComponent } from './purchases-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api/api.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('PurchasesListComponent', () => {
  let component: PurchasesListComponent;
  let fixture: ComponentFixture<PurchasesListComponent>;
  let service: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasesListComponent ],
      imports: [HttpClientTestingModule],
      providers: [ApiService],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('On init purchases should be loaded', fakeAsync(() => {
    spyOn(service, 'getPurchases').and.returnValue(of({data: [{name: 'Supermercado', id: 123}]}).pipe(delay(1)));

    component.ngOnInit();

    expect(service.getPurchases).toHaveBeenCalled();
    expect(component.purchases).toEqual([]);

    // Simulates the asynchronous passage of time
    tick(1);

    expect(component.purchases).toEqual([{name: 'Supermercado', id: 123}]);
  }));
});
