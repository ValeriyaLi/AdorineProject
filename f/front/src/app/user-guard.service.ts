import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {UserService} from "./user.service";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate{
  isSuperuser!: boolean;
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.getUser().pipe(
      map((data: any) => {
        if (localStorage.getItem('token') && !data.is_superuser) {
          return true;
        }
        alert("Prohibited")
        this.router.navigate([''], { queryParams: { returnUrl: state.url } });
        return false;
      })
    );
  }

  //   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  //   return false;
  // }
}
