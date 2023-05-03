import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from "../user.service";
import {Router} from "@angular/router";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthorized: boolean = false;
  isSuperuser!: boolean;

  constructor(private userService: UserService, private router: Router,  private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.isAuthorized = localStorage.getItem('token') !== null;
    this.isSuperuser = localStorage.getItem('is_superuser') === "true"
    this.userService.isAdmin.subscribe(
      (isAdmin: boolean) => (this.isSuperuser = isAdmin)
    );
    this.userService.authChanged.subscribe(
      (isAuthorized: boolean) => (this.isAuthorized = isAuthorized)
    );
  }

  home(){
    if (localStorage.getItem('is_superuser') === "true"){
      this.router.navigate(['/admin-home']);
    }
    else{
      this.router.navigate(['/user-home']);
    }
  }
}
