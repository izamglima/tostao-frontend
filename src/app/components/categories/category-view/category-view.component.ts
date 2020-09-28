import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html'
})
export class CategoryViewComponent implements OnInit {
  category;
  categoryId = 12;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.showCategory();
  }

  showCategory() {
    this.apiService.getCategory(this.categoryId).subscribe((data) => {
      console.log(data);
      //assign the value to categories
    })
  }
}
