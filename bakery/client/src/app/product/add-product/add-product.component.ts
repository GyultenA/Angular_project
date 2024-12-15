import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  types = ["SWEET", "SALTY"]

  productForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    description:["", [Validators.required,Validators.minLength(10), Validators.maxLength(450) ]],
    type: ["",[Validators.required]],
    imageUrl: ["",[ Validators.required,
      Validators.pattern(/https:\/\/.+\.(jpg|jpeg|png|gif)/i),]]
  })

  constructor(
    private productService: ProductService,
    private userApi: UserService,
    private router: Router,
    private fb: FormBuilder,
  ){}
  
  get loggedIn(): boolean{
    return this.userApi.isLoggedIn
  }

  onSubmit(): void{

    if(this.productForm.invalid){
      return;
    }

    const name = this.productForm.value.name || '';
    const description = this.productForm.value.description || '';
    const type= this.productForm.value.type || '';
    const imageUrl = this.productForm.value.imageUrl || '';

    this.productService.createProduct(name, description,type,imageUrl).subscribe(() => {
      this.router.navigate(['/catalog'])
    })
  }

}
