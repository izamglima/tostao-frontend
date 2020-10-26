import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-marketplaces-list',
  templateUrl: './marketplaces-list.component.html'
})
export class MarketplacesListComponent implements OnInit {
  marketplaces = [];
  filteredItems = [];
  filterMarketplace;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.showMarketplaces();
  }

  showMarketplaces(): void {
    this.apiService.getMarketplaces().subscribe((response: any) => {
      this.marketplaces = response.data;
      this.assignMarketplacesCopy();
    });
  }

  assignMarketplacesCopy(): void {
    this.filteredItems = Object.assign([], this.marketplaces);
  }

  filterItem(value): void {
    if (!value) {
        this.assignMarketplacesCopy();
    }
    this.filteredItems = Object.assign([], this.marketplaces).filter(
       item => item.attributes.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  }

  cleanFilter(): void {
    this.filterMarketplace = null;
    this.assignMarketplacesCopy();
  }
}
