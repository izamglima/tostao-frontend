import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html'
})
export class CategoriesListComponent implements OnInit {
  categories = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.showCategories();
  }

  showCategories(): void {
    this.apiService.getCategories().subscribe((response) => {
      console.log(response.data);
      this.categories = response.data;
    });
  }
}
