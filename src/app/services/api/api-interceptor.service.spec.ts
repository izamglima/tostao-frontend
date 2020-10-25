import { getTestBed, TestBed } from '@angular/core/testing';
import { ApiInterceptorService } from './api-interceptor.service';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';

describe('ApiInterceptorService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  let interceptor: ApiInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiInterceptorService,
        ApiService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiInterceptorService,
          multi: true
        }
      ]
    });
    service = TestBed.inject(ApiService);
    interceptor = TestBed.inject(ApiInterceptorService);
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

  it('should handle error when the request fails - backend', () => {

    const error = new HttpErrorResponse({
      error: 401,
      statusText: 'Unauthorized'
    });

    interceptor.handleError(error);
    spyOn(interceptor, 'handleError').and.throwError(error);

    expect(interceptor.handleError).toThrowError();
  });

});
