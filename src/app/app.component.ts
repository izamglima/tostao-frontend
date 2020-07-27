import { Component } from '@angular/core';
import { ChartsService } from './charts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'tostao-client';

  spendingChart = [];
  priceChart = [];
  incomeChart = [];
  
  constructor(private _charts: ChartsService) {}
  
  ngOnInit() {
    this.spendingChart = this._charts.buildSpendingChart('canvas');
    this.priceChart = this._charts.buildPriceChart('canvas2');
    this.incomeChart = this._charts.buildIncomeChart('canvas3');
  }
}
