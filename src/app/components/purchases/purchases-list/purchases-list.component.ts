import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases-list.component.html'
})
export class PurchasesListComponent implements OnInit {
  purchases = [];
  filteredItems = [];
  filterPurchase;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.showPurchases();
  }

  showPurchases(): void {
    this.apiService.getPurchases().subscribe((response: any) => {
      this.purchases = response.data;
      console.log(this.purchases);
      this.assignPurchasesCopy();
    });
  }

  assignPurchasesCopy(): void {
    this.filteredItems = Object.assign([], this.purchases);
  }

  filterItem(value): void {
    if (!value) {
        this.assignPurchasesCopy();
    }
    this.filteredItems = Object.assign([], this.purchases).filter(
       item => item.attributes.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  }

  cleanFilter(): void {
    this.filterPurchase = null;
    this.assignPurchasesCopy();
  }

}
