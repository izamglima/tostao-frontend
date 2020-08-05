import { Component, OnInit } from '@angular/core';
import { ChartsService } from './charts.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'tostao-client';
  spendingChart = [];
  priceChart = [];
  incomeChart = [];
  constructor(private charts: ChartsService, private meta: Meta) {
    this.meta.addTags([
      { name: 'author', content: 'Izabela Lima' },
      { name: 'subtitle', content: 'Manage your expenses'},
      { name: 'classification', content: 'Finaces'}
    ], true);
  }
  ngOnInit(): any {
    this.spendingChart = this.charts.buildSpendingChart('canvas');
    this.priceChart = this.charts.buildPriceChart('canvas2');
    this.incomeChart = this.charts.buildIncomeChart('canvas3');
  }
}
