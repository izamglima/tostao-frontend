import { TestBed } from '@angular/core/testing';
import { ApiInterceptorService } from './api-interceptor.service';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

describe('ApiInterceptorService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiInterceptorService,
          multi: true
        }
      ]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an Authorization header', () => {
    service.getCategories().subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`${service.API_ENDPOINT}/categories`);

    expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
  });
});
