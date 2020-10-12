import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CategoryViewComponent } from './category-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/services/api/api.service';
import { of } from 'rxjs';
import { Category } from 'src/app/models/category';
import {delay} from 'rxjs/operators';

describe('CategoryViewComponent', () => {
  let component: CategoryViewComponent;
  let fixture: ComponentFixture<CategoryViewComponent>;
  let service: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryViewComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryViewComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ApiService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('On init categories should be loaded', fakeAsync(() => {
    let category: Category;
    category = {
      id: '123',
      type: 'category',
      attributes: {
        name: 'Supermercado'
      },
      relationships: {}
    }
    spyOn(service, 'getCategory').and.returnValue(of({data: category}).pipe(delay(1)));

    component.ngOnInit();

    expect(service.getCategory).toHaveBeenCalled();
    expect(component.category).toEqual(undefined);

    // Simulates the asynchronous passage of time
    tick(1);

    expect(component.category).toEqual(category);
  }));
});
