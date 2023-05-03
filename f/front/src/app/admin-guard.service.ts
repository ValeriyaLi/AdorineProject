import { Injectable } from '@angular/core';
import {UserService} from "./user.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {catchError, Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {
  isSuperuser: boolean = false;

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.getUser().pipe(
      map((data: any) => {
        if (localStorage.getItem('token') && data.is_superuser) {
          return true;
        }
        alert("Prohibited")
        this.router.navigate([''], { queryParams: { returnUrl: state.url } });
        return false;
      })
    );
  }


  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //   this.isSuperuser = Boolean(localStorage.getItem('is_superuser'))
  //   if (this.isSuperuser) {
  //     return of(true); // wrap in an Observable object
  //   } else {
  //     this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
  //     return of(false); // wrap in an Observable object
  //   }
  //   console.log(this.isSuperuser)
  // }
}

    // return this.userService.getUser().pipe(
    //   map((data: any) => {
    //     this.isSuperuser = data.is_superuser;
    //     console.log(this.isSuperuser);
    //     if (this.isSuperuser) {
    //       return true;
    //     }
    //     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    //     return false;
    //   }),
    //   catchError((error: any) => {
    //     console.error(error);
    //     return of(false);
    //   })
//     // );
//   }
// }
