import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html'
})
export class CategoryViewComponent implements OnInit {
  category: Category;
  categoryId = '';
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.params.id;
    this.showCategory();
  }

  showCategory(): void {
    this.apiService.getCategory(this.categoryId).subscribe((response) => {
      this.category = response.data;
    });
  }
}
