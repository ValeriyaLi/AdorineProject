import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AuthToken, Category, Product} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client: HttpClient) {
  }

  // login(username: string, password: string): Observable<AuthToken> {
  //   return this.client.post<AuthToken>(
  //     `${this.BASE_URL}/users/token/`,
  //     {username, password}
  //   )
  // }


  getCategories(): Observable<Category[]>{
    return this.client.get<Category[]>(`${this.BASE_URL}/categories/`)
  }

  deleteCategory(category_id: number) {
    return this.client.delete(`${this.BASE_URL}/categories/${category_id}/`)
  }

  // getProducts(category_id: number): Observable<Product[]>{
  //   return this.client.get<Product[]>(`${this.BASE_URL}/categories/${category_id}/products/`)
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
