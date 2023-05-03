import {Component, OnInit} from '@angular/core';
import {Product} from "../models";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../category.service";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  products: Product[] = [];


  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const category_id = Number(routeParams.get('category_id'));
    this.productService.getProducts(category_id).subscribe(
      (products: Product[]) => this.products = products);
  }

}
