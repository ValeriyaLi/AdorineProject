import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category, Product} from "./models";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client: HttpClient) {
  }

  getProducts(category_id: number): Observable<Product[]>{
    return this.client.get<Product[]>(`${this.BASE_URL}/categories/${category_id}/products/`)
  }

  getProduct(product_id: number): Observable<Product>{
    return this.client.get<Product>(`${this.BASE_URL}/products/${product_id}/`)
  }

  addCategory(form: FormData) {
    return this.client.post(`${this.BASE_URL}/categories/`, form)
  }

  addProduct(form: FormData) {
    return this.client.post(`${this.BASE_URL}/products/`, form)
  }

  deleteProduct(prod_id: number){
    return this.client.delete(`${this.BASE_URL}/products/${prod_id}/`)
  }

  // login(username: string, password: string): Observable<AuthToken> {
  //   return this.client.post<AuthToken>(
  //     `${this.BASE_URL}/users/token/`,
  //     {username, password}
  //   )
  // }


  // getProduct(product_id: number): Observable<Product>{
  //   return this.client.get<Product>(`${this.BASE_URL}/products/${product_id}/`)
  // }


  // getCategories(): Observable<Category[]> {
  //   return this.client.get<Category[]>(
  //     `${this.BASE_URL}/api/categories/`
  //   )
  // }

  // createCategory(categoryName: string): Observable<Category> {
  //   return this.client.post<Category>(
  //     `${this.BASE_URL}/api/categories/`,
  //     {name: categoryName}
  //   )
  // }
  //
  // deleteCategory(category_id: number): Observable<any> {
  //   return this.client.delete(
  //     `${this.BASE_URL}/categories/${category_id}/`
  //   )
  // }

}
