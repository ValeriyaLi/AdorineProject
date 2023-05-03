import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Product, User, UserCart} from './models';
import { Injectable } from '@angular/core';
import {ProductService} from "./product.service";
import {Observable, switchMap} from "rxjs";
import { map } from 'rxjs/operators';
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})

export class CartService {
  BASE_URL = 'http://127.0.0.1:8000/cart/'

  constructor(
    private client: HttpClient,
    private productService: ProductService,
  ) { }

  addToCart(product: number, user: number){
    return this.client.post(
      `${this.BASE_URL}`,
      {product, user}
    )
  }

  deleteFromCart(cart_id: number): Observable<Product>{
    return this.client.delete<Product>(`${this.BASE_URL}${cart_id}/`)
  }

  getAllCarts(): Observable<UserCart[]>{
    return this.client.get<UserCart[]>(`${this.BASE_URL}`)
  }

  // getProduct(product_id: number): Observable<Product>{
  //   return this.client.get<Product>(`${this.BASE_URL}/products/${product_id}/`)
  // }

  // addToCart(user_id: number, product_id: number): Observable<Product> {
  //   return this.client.post<Product>(`${this.BASE_URL}/${user_id}/`,{ product: product_id });
  // }

  // getCartProducts(): Observable<Product[]> {
  //   return this.client.get<Product[]>(`${this.BASE_URL}/cart/`)
  // }
  // getCartProducts(): Observable<Product[]> {
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.client.get<Product[]>(this.BASE_URL, { headers });
  // }

  // getCartProducts(): Observable<Product[]> {
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.client.get<UserCart[]>(this.BASE_URL, { headers }).pipe(
  //     map(response => response.map(cart => cart.product))
  //   );
  // }

  // getCartProducts(): Observable<any[]> {
  //   return this.client.get<any[]>(`${this.BASE_URL}/products/`);
  // }

  //
  // deleteFromCart(): Observable<void> {
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   const url = `${this.BASE_URL}`;
  //   return this.client.delete<void>(`${this.BASE_URL}`, { headers })
  // }

  // getCartProducts(): Observable<Product[]> {
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.client.get<UserCart[]>(this.BASE_URL, { headers }).pipe(
  //     switchMap(carts => {
  //       // Get array of product IDs from all user carts
  //       const productIds = carts.map(response => response.map(cart => cart.productId))
  //
  //
  //       // Fetch details of all products with the given IDs
  //       return this.client.get<Product[]>(`${this.BASE_URL}/products?ids=${productIds.join(',')}`, { headers });
  //     })
  //   );
  // }


}
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyNTQ3NzgxLCJpYXQiOjE2ODI1Mjk3ODEsImp0aSI6IjQ1NTA5ZTY2ZDA3ZTQ3ODA5ZmI3MDllNzMyZjk2ZDA4IiwidXNlcl9pZCI6NH0.kj4OGbOA56Ml7dTNCjLMdVUD0VqoLROpwgqxUULbMPQ
