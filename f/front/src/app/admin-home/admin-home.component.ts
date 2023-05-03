import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../models";
import {CategoryService} from "../category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService, private router: Router, private userService: UserService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data:Category[])=>{
      this.categories= data;
    })
    this.cdr.detectChanges();
    // window.location.replace(window.location.href);
  }

  deleteCategory(category_id: number){
    this.categoryService.deleteCategory(category_id).subscribe(() => {
      this.categories = this.categories.filter((category) => category.id !== category_id);
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
    // window.location.replace(window.location.href);
  }
}
