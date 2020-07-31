import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';
import { Chart } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  //constructor(private _http: HttpClient) {}
  constructor() {

  }
  // Exemplo pra quando integrar com o backend
  /*dailyForecast() {
    return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
      .map(result => result);
  }*/
  
  randomData() {
    return {
      "dataSpendings":[
          35, 35, 35
      ],
      "labelSpendings": [
          "Market", "Transport", "Home"
      ],
      "dataPriceMonths": [
          "3y", "1y", "6m", "3m", "1m", "1w", "24h"
      ],
      "dataIncomeMonths": [
          "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago" 
      ],
      "dataIncomeValues": [
          8, 4, 6, 11, 12, 8, 6.5, 10
      ]
   };
  }

  randomScalingFactor = function() {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
  }


  buildPriceChart = function(element:string) {
    return new Chart(element, {
      type: 'line',
      data: {
        labels: this.randomData().dataPriceMonths,
        datasets: [
          {
            label: "Banana",
            fontColor: "white",
            fill: false,
            backgroundColor: '#fff',
            borderColor: '#fff',
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor()
            ],
          }/*,
          {
          label: "Apple",
          backgroundColor: '#45BFB3',
          borderColor: '#45BFB3',
          data: [
            this._charts.randomScalingFactor(),
            this._charts.randomScalingFactor(),
            this._charts.randomScalingFactor(),
            this._charts.randomScalingFactor(),
            this._charts.randomScalingFactor(),
            this._charts.randomScalingFactor(),
            this._charts.randomScalingFactor()
          ],
          fill: false,
        } */]
      },
      options: {
        legend: {
            label: {
              fontColor: "white"
            }
        },
        scales: { 
          yAxes: [{
            ticks: {
                fontColor: "white"
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: "white"
            }
          }]
        }
      }
    });
  }
 
  buildSpendingChart = function(element:string) {
    return new Chart(element, {
      type: 'pie',
      data: {
        labels:  this.randomData().labelSpendings ,
        datasets: [{
          backgroundColor: [
            "#F8CBC5",
            "#D9AD5B",
            "#5CA4EB"
          ],
          data: this.randomData().dataSpendings
        }] 
      },
      options: {
        responsive: true,
        legend: {
          position: 'bottom',
          padding: 10
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });
  }

  buildIncomeChart = function(element:string) {
    return new Chart(element, {
      type: 'bar',
      data: {
        labels: this.randomData().dataIncomeMonths,
        datasets: [{
          label: '$',
          data: this.randomData().dataIncomeValues,
          backgroundColor: '#C4C4C4'
        }]
      },
      options: {
        scales: {
          offset: false,
          yAxes: [{
            gridLines: {
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: {
            gridLines: {
              drawBorder: false,
              offsetGridLines: false
            }
          }
        }
      }
    });
  }
}
