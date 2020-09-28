import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_ENDPOINT = 'http://142.93.13.202/api'

  constructor(private httpClient: HttpClient) { }

  getCategories() {
    return this.httpClient.get(`${this.API_ENDPOINT}`);
  }
}
