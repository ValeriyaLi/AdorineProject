import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UserService} from "./user.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.getUser().pipe(
      map((data: any) => {
        if (localStorage.getItem('token') !== null) {
          return true;
        }
        alert("Prohibited")
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
      })
    );
  }
}
