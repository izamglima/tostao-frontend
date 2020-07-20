import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';
import SampleJson from '../assets/randomDataToCharts.json';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  //constructor(private _http: HttpClient) {}
  constructor() {

  }

  /*dailyForecast() {
    return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
      .map(result => result);
  }*/
  
  randomDataToChartSpendingsHome() {
    return SampleJson;
  }

  randomScalingFactor = function() {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
  }
}
