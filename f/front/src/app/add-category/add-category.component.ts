import { Component } from '@angular/core';
import {ProductService} from "../product.service";
import {Category} from "../models";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  form!: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private productService: ProductService) {
    this.form = this.formBuilder.group({
      title: '',
      logo: null
    });
  }

  onLogoSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({
        logo: file
      });
    }
  }


  submit() {
    const formData = new FormData();
    formData.append('title', this.form.value.title);
    // @ts-ignore
    formData.append('logo', this.form.get('logo').value);

    this.productService.addCategory(formData).subscribe(() => {
      this.router.navigate(['/admin-home'])
    });
  }
}


  // ngOnInit(): void {
  //   this.categoryForm = this.fb.group({
  //     title: ['', Validators.required],
  //     logo: [null, Validators.required]
  //   });
  // }
  //
  // onSubmit() {
  //   const formData = new FormData();
  //   // @ts-ignore
  //   formData.append('title', this.categoryForm.get('title').value);
  //   // @ts-ignore
  //   formData.append('logo', this.categoryForm.get('logo').value);
  //
  //   this.http.post('http://localhost:8000/api/categories/', formData).subscribe(
  //     response => {
  //       console.log(response);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  //}
  // title: string = '';
  // logo: string = '';
  // constructor(private productService: ProductService) {
  // }

  // addCategory(){
  //   this.productService.addCategory(this.title, this.logo).subscribe((data:Category) =>{
  //     this.title = ''
  //     this.logo = ''
  //   })
  // }

