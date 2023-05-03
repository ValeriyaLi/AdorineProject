import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  form!: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private productService: ProductService) {
    this.form = this.formBuilder.group({
      title: '',
      category: 0,
      description: '',
      price: 0,
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
    formData.append('description', this.form.value.description);
    formData.append('price', this.form.value.price);
    const routeParam = this.route.snapshot.paramMap;
    const category = Number(routeParam.get('category_id')).toString();
    formData.append('category', category);
    // @ts-ignore
    formData.append('logo', this.form.get('logo').value);

    this.productService.addProduct(formData).subscribe(() => {
      this.router.navigate(['/admin-home'])
    });
  }

}
