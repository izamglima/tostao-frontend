import { Component } from '@angular/core';
import { ChartsService } from './charts.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'tostao-client';


  spendingChart = [];
  priceChart = [];
  incomeChart = [];
  
  constructor(private _charts: ChartsService, private meta: Meta) {
    this.meta.addTags([
      { name: 'author', content: 'Izabela Lima' },
      { name: 'subtitle', content: 'Manage your expenses'},,
      { name: 'classification', content: 'Finaces'}
    ], true);
  }
  
  ngOnInit() {
    this.spendingChart = this._charts.buildSpendingChart('canvas');
    this.priceChart = this._charts.buildPriceChart('canvas2');
    this.incomeChart = this._charts.buildIncomeChart('canvas3');
  }
}
