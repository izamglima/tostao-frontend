import { Component } from '@angular/core';
import { ChartsService } from './charts.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'tostao-frontend';

  spendingChart = [];
  priceChart = [];
  incomeChart = [];
  
  constructor(private _charts: ChartsService) {}
  
  ngOnInit() {
    let values = this._charts.randomDataToChartSpendingsHome();

    this.spendingChart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels:  values.labelSpendings ,
        datasets: [{
          backgroundColor: [
            "#F8CBC5",
            "#D9AD5B",
            "#5CA4EB"
          ],
          data: values.dataSpendings
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

    this.priceChart = new Chart('canvas2', {
      type: 'line',
      data: {
        labels: values.dataPriceMonths,
        datasets: [
          {
            label: "Banana",
            fontColor: "white",
            fill: false,
            backgroundColor: '#fff',
            borderColor: '#fff',
            data: [
              this._charts.randomScalingFactor(),
              this._charts.randomScalingFactor(),
              this._charts.randomScalingFactor(),
              this._charts.randomScalingFactor(),
              this._charts.randomScalingFactor(),
              this._charts.randomScalingFactor(),
              this._charts.randomScalingFactor()
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

    this.incomeChart = new Chart('canvas3', {
      type: 'bar',
      data: {
        labels: values.dataIncomeMonths,
        datasets: [{
          label: '$',
          data: values.dataIncomeValues,
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
