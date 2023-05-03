import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../category.service";
import {Category} from "../models";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{


  categories: Category[] = [];


  constructor(private categoryService: CategoryService) { }


  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data:Category[])=>{
      this.categories = data;
    })
  }

  // getCategories() {
  //   this.categoryService.getCategories().subscribe((categories) => {
  //     this.categories = categories;
  //   });
  // }

}
