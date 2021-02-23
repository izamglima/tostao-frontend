import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_ENDPOINT = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  /* * * * * * * * * * *
        CATEGORIES
  * * * * * * * * * * */
  getCategories(): any {
    return this.httpClient.get(`${this.API_ENDPOINT}/categories`);
  }

  getCategory(id: string): any {
    return this.httpClient.get(`${this.API_ENDPOINT}/categories/${id}`);
  }


  /* * * * * * * * * * *
        CURRENCIES
  * * * * * * * * * * */
  getCurrencies(): any {
    return this.httpClient.get(`${this.API_ENDPOINT}/currencies`);
  }


  /* * * * * * * * * * *
        MARKETPLACES
  * * * * * * * * * * */
  getMarketplaces(): any {
    return this.httpClient.get(`${this.API_ENDPOINT}/market_places`);
  }


  /* * * * * * * * * * *
        PRODUCTS
  * * * * * * * * * * */
  getProducts(): any {
    return this.httpClient.get(`${this.API_ENDPOINT}/products`);
  }


  /* * * * * * * * * * *
        PURCHASES
  * * * * * * * * * * */
  getPurchases(): any {
    return this.httpClient.get(`${this.API_ENDPOINT}/expenses`);
  }


}
