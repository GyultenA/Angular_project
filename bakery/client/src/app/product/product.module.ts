import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { AddProductComponent } from './add-product/add-product.component';



@NgModule({
  declarations: [
    CatalogComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
