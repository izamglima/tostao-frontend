import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  spendingChart = [];
  priceChart = [];
  incomeChart = [];

  constructor(private charts: ChartsService) { }

  ngOnInit(): void {
    this.spendingChart = this.charts.buildSpendingChart('canvas');
    this.priceChart = this.charts.buildPriceChart('canvas2');
    this.incomeChart = this.charts.buildIncomeChart('canvas3');
  }

}
