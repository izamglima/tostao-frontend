import { getTestBed, TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get categories', () => {
    const dummyCategories = [
      { name: 'Supermercado' },
      { name: 'Empresa'}
    ];

    service.getCategories().subscribe(categories => {
      expect(categories.length).toBe(2);
      expect(categories).toEqual(dummyCategories);
    });

    const request = httpMock.expectOne(`${service.API_ENDPOINT}/categories`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyCategories);
  });
});
