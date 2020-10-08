import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    httpRequest = httpRequest.clone({
      setHeaders: {
        Authorization: `Token token="a"`
      }
    });

    return next.handle(httpRequest)
    .pipe(retry(1),
    catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      /*
        A client-side or network error occurred
      */
      errorMessage = `Client side error occurred: ${error.error.message}`;
    } else {
      /*
        The backend returned an unsuccessful response code.
      */
      errorMessage = `Backend returned error code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
