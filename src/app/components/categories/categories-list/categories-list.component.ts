import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html'
})
export class CategoriesListComponent implements OnInit {
  categories = [];
  filteredItems = [];
  filterCategory;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.showCategories();
  }

  assignCategoriesCopy() {
    this.filteredItems = Object.assign([], this.categories);
  }

  showCategories(): void {
    this.apiService.getCategories().subscribe((response) => {
      console.log(response.data);
      this.categories = response.data;
      this.assignCategoriesCopy();
    });
  }

  filterItem(value) {
    if(!value) {
        this.assignCategoriesCopy();
    }
    this.filteredItems = Object.assign([], this.categories).filter(
       item => item.attributes.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }

  cleanFilter() {
    this.filterCategory = null;
    this.assignCategoriesCopy();
  }

}
