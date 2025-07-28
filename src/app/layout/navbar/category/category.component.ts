import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryService } from '../../category.service';
import { Category } from '../../category.model';

@Component({
  selector: 'app-category',
  imports: [FontAwesomeModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  
  categoryService:CategoryService = inject(CategoryService)
  
  categories: Category[] | undefined
  
  currentActivateCategory: Category = this.categoryService.getCategoryByDefault()

  ngOnInit(): void {
    this.fetchCategories()
  }

  fetchCategories() {
    this.categories = this.categoryService.getCategories()
  }
}
