import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_ENDPOINT = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getCategory(id: string): any {
    return this.httpClient.get(`${this.API_ENDPOINT}/categories/${id}`);
  }

  getCategories(): any {
    return this.httpClient.get(`${this.API_ENDPOINT}/categories`);
  }

  getCurrencies(): any {
    return this.httpClient.get(`${this.API_ENDPOINT}/currencies`);
  }

  getMarketplaces(): any {
    return this.httpClient.get(`${this.API_ENDPOINT}/market_places`);
  }
}
