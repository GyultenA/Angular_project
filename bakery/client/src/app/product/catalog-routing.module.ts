import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from "./catalog/catalog.component";
import { DetailsComponent } from "./details/details.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { EditComponent } from "./edit/edit.component";



const routes: Routes = [
    {path: 'catalog', children: [
        {path: '', pathMatch: 'full', component: CatalogComponent},
        {path: ':productId', children: [
            {path:'', pathMatch: 'full', component: DetailsComponent},
            {path: 'edit', component: EditComponent}
        ]},
        {path: 'create', component: AddProductComponent}
    ]
        
    }
]







@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CatalogRoutingModule {}