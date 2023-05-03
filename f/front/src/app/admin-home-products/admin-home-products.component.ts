import {Component, OnInit} from '@angular/core';
import {Product} from "../models";
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-home-products',
  templateUrl: './admin-home-products.component.html',
  styleUrls: ['./admin-home-products.component.scss']
})
export class AdminHomeProductsComponent implements OnInit {
  products: Product[] = [];
  category: number = 0;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const category_id = Number(routeParams.get('category_id'));
    this.category = category_id;
    this.productService.getProducts(category_id).subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );
  }

  deleteProduct(prod_id:number){
    this.productService.deleteProduct(prod_id).subscribe(()=>{
      this.products= this.products.filter((product) => product.id !== prod_id);
    })
  }
}



//   ngOnInit(): void {
//     const routeParams = this.route.snapshot.paramMap;
//     const category_id = Number(routeParams.get('category_id'));
//     this.productService.getProducts(category_id).subscribe(
//       (products: Product[]) => this.products = products);
//     this.category = this.products[0].category_name;
//     console.log(this.category)
//   }
// }
