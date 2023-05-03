import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product, User, UserCart} from "../models";
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart.service";
import {UserService} from "../user.service";
import {CartComponent} from "../cart/cart.component";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  product!: Product
  user_id!: number
  isAuthorized: boolean = false;
  isSuperuser: boolean = false;

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartComponent: CartComponent,
              private cartService: CartService, private userService: UserService) {
    this.cartComponent.products = [];
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    // @ts-ignore
    const product_id = Number(routeParams.get('product_id'));
    this.productService.getProduct(product_id).subscribe((data:Product)=>{
      this.product = data;
    })
    if(localStorage.getItem('token')){
      this.isAuthorized = true;
    }
    this.isSuperuser = localStorage.getItem('is_superuser') === "true"
    this.userService.isAdmin.subscribe(
      (isAdmin: boolean) => (this.isSuperuser = isAdmin)
    );
  }

  addToCart(product_id: number){
    this.user_id = Number(localStorage.getItem('user_id'));
    console.log(this.user_id)
    this.cartService.addToCart(product_id, this.user_id).subscribe((data: any) =>{
      this.cartComponent.products.push(data)
    })
    alert("Product added to the cart!")
  }
}
