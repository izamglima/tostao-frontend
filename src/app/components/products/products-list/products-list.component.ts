import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {
  products = [];
  filteredItems = [];
  filterProducts;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts(): void {
    this.apiService.getProducts().subscribe((response: any) => {
      this.products = response.data;
      this.assignProductsCopy();
    });
  }

  assignProductsCopy(): void {
    this.filteredItems = Object.assign([], this.products);
  }

  filterItem(value): void {
    if (!value) {
        this.assignProductsCopy();
    }
    this.filteredItems = Object.assign([], this.products).filter(
       item => item.attributes.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  }

  cleanFilter(): void {
    this.filterProducts = null;
    this.assignProductsCopy();
  }
}
