import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit{
  logged: boolean = localStorage.getItem('token') !== null;
  forma!: FormGroup;

  constructor(private userService: UserService, private router: Router, private cdr: ChangeDetectorRef,
              private formBuilder: FormBuilder,) {
    this.forma = this.formBuilder.group({
      user: 0,
      country: '',
      city: '',
      street: '',
      house: 0
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
    window.location.replace(window.location.href);
  }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  save() {
    const formData = new FormData();
    const user = localStorage.getItem('user_id');
    // @ts-ignore
    formData.append('user', user.toString());
    formData.append('country', this.forma.value.country);
    formData.append('city', this.forma.value.city);
    formData.append('street', this.forma.value.street);
    formData.append('house', this.forma.value.house);
    this.userService.addUserInfo(formData).subscribe(() => {
    });
  }
}
