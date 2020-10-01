import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_ENDPOINT = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getCategory(id: string): Observable<object> {
    return this.httpClient.get(`${this.API_ENDPOINT}/categories/${id}`);
  }

  getCategories(): any {
    return this.httpClient.get(`${this.API_ENDPOINT}/categories`);
  }
}
