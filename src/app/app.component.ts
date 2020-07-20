import { Component } from '@angular/core';
import { ChartsService } from './charts.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'tostao-frontend';

  chartSpending = [];
  chartPrice = [];
  
  constructor(private _charts: ChartsService) {}
  
  ngOnInit() {

    this.chartSpending = new Chart('canvas', {
      type: 'pie',
      data: {
        labels:  this._charts.randomDataToChartSpendingsHome().labelSpendings ,
        datasets: [{
          backgroundColor: [
            "#F8CBC5",
            "#D9AD5B",
            "#5CA4EB"
          ],
          data: this._charts.randomDataToChartSpendingsHome().dataSpendings
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

    this.chartPrice = new Chart('canvas2', {
      type: 'line',
      data: {
        labels: this._charts.randomDataToChartSpendingsHome().dataPriceMonths,
        datasets: [{
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
        }, {
          label: "Banana",
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
        }]
      }
    });
  }
}
