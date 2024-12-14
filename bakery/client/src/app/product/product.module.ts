import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentsModule } from '../comments/comments.module';



@NgModule({
  declarations: [
    CatalogComponent,
    AddProductComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    CommonModule, CatalogRoutingModule, ReactiveFormsModule, FormsModule, CommentsModule,
  ],
  exports:[],
})
export class ProductModule { }
