import {Component, Injectable, OnInit} from '@angular/core';
import { CartService } from '../cart.service';
import {Category, Product, User, UserCart} from "../models";
import {UserService} from "../user.service";
import {ProductService} from "../product.service";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products!: Product[];
  price: number = 0;
  carts!: UserCart[];
  cart!: UserCart;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.userService.getCartProducts().subscribe((prods: any) => {
      this.products = prods;
      for (const product of this.products) {
        this.price = this.price + product.price;
      }
    });
    this.cartService.getAllCarts().subscribe((carts: UserCart[]) => {
      this.carts = carts.filter(cart => cart.user === Number(localStorage.getItem("user_id")));
      console.log(this.carts);
    });
  }

  deleteFromCart(product_id: number) {
    const user_id = Number(localStorage.getItem('user_id'))
    const cartIndex = this.carts.findIndex(cart => cart.product === product_id && cart.user === user_id);
    if (cartIndex !== -1) {
      const cart = this.carts[cartIndex];
      this.cartService.deleteFromCart(cart.id).subscribe(() => {
        this.carts.splice(cartIndex, 1);
        const productIndex = this.products.findIndex(product => product.id === product_id);
        this.price = this.price - this.products[productIndex].price
        if (productIndex !== -1) {
          this.products.splice(productIndex, 1);
        }
      });
    } else {
      alert("Product not found in cart.");
    }
  }
}
