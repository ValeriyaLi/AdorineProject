import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {AuthToken, Category, User} from "./models";
import jwt_decode from "jwt-decode";
import {LoginComponent} from "./login/login.component";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = 'http://127.0.0.1:8000'
  authChanged = new EventEmitter<boolean>();
  isAdmin = new EventEmitter<boolean>();

  constructor(private client: HttpClient) { }

  addUserInfo(form: FormData){
    return this.client.post(`${this.BASE_URL}/info/`, form)
  }

  createUser(username: string, password: string, email: string): Observable<User> {
    return this.client.post<User>(
      `${this.BASE_URL}/users/`,
      {username, password, email}
    )
  }

  getUser() {
    return this.client.post(`${this.BASE_URL}/users/user/`, {'token': localStorage.getItem('token')})
  }

  login(username: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(
      `${this.BASE_URL}/users/token/`,
      {username, password}
    )
      .pipe(
      tap((response: AuthToken) => {
        this.authChanged.emit(true);
      })
    );
  }

  getCartProducts() {
    return this.client.get(`${this.BASE_URL}/users/cart_products/`)
  }

  logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user_id');
      localStorage.removeItem('is_superuser');
      this.authChanged.emit(false);
      this.isAdmin.emit(false);
  }

}
