import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-currencies-list',
  templateUrl: './currencies-list.component.html'
})
export class CurrenciesListComponent implements OnInit {
  currencies = [];
  filteredItems = [];
  filterCurrency;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.showCurrencies();
  }

  showCurrencies(): void {
    this.apiService.getCurrencies().subscribe((response: any) => {
      this.currencies = response.data;
      this.assignCategoriesCopy();
    });
  }

  assignCategoriesCopy(): void {
    this.filteredItems = Object.assign([], this.currencies);
  }

  filterItem(value): void {
    if (!value) {
        this.assignCategoriesCopy();
    }
    this.filteredItems = Object.assign([], this.currencies).filter(
       item => item.attributes.code.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  }

  cleanFilter(): void {
    this.filterCurrency = null;
    this.assignCategoriesCopy();
  }
}
