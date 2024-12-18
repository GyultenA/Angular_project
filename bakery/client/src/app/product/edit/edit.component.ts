import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product.type';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  product = {} as Product;
  originalProduct = {} as Product;

  types: string[] = ["SWEET", "SALTY"];

  constructor(
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private router: Router,


  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const valueId = 'productId';
      const id = data[valueId];

      this.productService.getOneProduct(id).subscribe(product => {
        this.product = product;
        this.originalProduct = { ...product };
      })
    })

  }

  getUpdatedFields(original: any, updated: any) {
    const updatedFields: any = {};

    for (const key in original) {

      if (updated.hasOwnProperty(key) && original[key] !== updated[key]) {
        updatedFields[key] = updated[key]
      }
    }
    return updatedFields;

  }

  onEditSubmit(formValue: any): void {
    const productId = this.activeRoute.snapshot.paramMap.get("productId");
    const updatedFields = this.getUpdatedFields(this.originalProduct, formValue);

    if(productId){
    this.productService.editProductTwo(productId, updatedFields).subscribe((product)=> {
    this.originalProduct= product
    })
   
    this.router.navigate([`/catalog`]);

  }
}


  onSubmit(editForm: NgForm) {
    if (editForm.invalid) {
      return;
    }

    editForm.value.id = this.product._id;
    this.productService.editProduct(
      editForm.value.id,
      editForm.value.name,
      editForm.value.type,
      editForm.value.description,
      editForm.value.imageUrl).subscribe(product => {
        this.product = product;
      })
     // console.log(this.product)
    this.router.navigate(['/catalog'])

  }


}




