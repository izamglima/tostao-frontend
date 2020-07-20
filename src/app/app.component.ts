import { Component } from '@angular/core';
import { ChartsService } from './charts.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'tostao-frontend';

  chart_One = []; // This will hold the first chart infos

  constructor(private _charts: ChartsService) {}
  /*
  ngOnInit() {
    this._charts.randomDataToChart_One()
      .subscribe(res => {
        let temp_max = res['list'].map(res => res.main.temp_max);
        let temp_min = res['list'].map(res => res.main.temp_min);
        let alldates = res['list'].map(res => res.dt);

        let weatherDates = []
        alldates.forEach((res) => {
            let jsdate = new Date(res * 1000)
            weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        })
      })
  }*/
}
