import { Component } from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../models";
import {ActivatedRoute, Router} from "@angular/router";
import {catchError, tap, throwError} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  logged: boolean = false;
  username: string = '';
  password: string = '';
  email: string = '';
  registerError: boolean = false;

  users: User[] = [];


  constructor(private userService: UserService, private router: Router) {
  }
  // createUser() {
  //   this.userService.createUser(this.username, this.password, this.email)
  //     .pipe(
  //       tap(user => {
  //         this.users.push(user);
  //         this.username = '';
  //         this.password = '';
  //         this.email = '';
  //         this.router.navigate(['/login']);
  //       }),
  //       catchError(error => {
  //         this.registerError = true;
  //         return throwError(error);
  //       })
  //     )
  //     .subscribe();
  // }

  createUser() {
    this.userService.createUser(this.username, this.password, this.email).subscribe((user) => {
      this.users.push(user);
      this.username = '';
      this.password = '';
      this.email = '';
      this.router.navigate(['/login']);
    },
      (error) => {
        this.registerError = true;
      }
    );
  }
}
