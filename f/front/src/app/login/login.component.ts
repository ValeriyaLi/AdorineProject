import {Component, EventEmitter, Injectable, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {AuthToken} from "../models";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loginError: boolean = false

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {

  }

  login() {
    this.userService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user_id', String(data.user_id));
      localStorage.setItem('is_superuser', String(data.is_superuser));
      this.username = '';
      this.password = '';
      if (data.is_superuser){
        this.userService.isAdmin.emit(true)
        this.router.navigate(['/admin-home']);
      }
     else{
        this.router.navigate(['/user-home']);
      }
    },
      (error) => {
        this.loginError = true;
      }
    );
  }
}
