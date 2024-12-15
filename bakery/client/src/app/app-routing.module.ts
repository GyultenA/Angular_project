import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CatalogComponent } from './product/catalog/catalog.component';
import { EditComponent } from './product/edit/edit.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { DetailsComponent } from './product/details/details.component';
import { SearchComponent } from './main/search/search.component';

const routes: Routes = [
  { path: '', pathMatch: "full", component: HomeComponent },

  { path: "about", component: AboutComponent },
  {path: 'search', component: SearchComponent},
 // { path: "catalog", component: CatalogComponent },
 { path: "catalog/create", component: AddProductComponent },
 // { path: "catalog/:productId", component: DetailsComponent},
 // { path: "catalog/:productId/edit", component: EditComponent },
  { path: "catalog", loadChildren: () => import('./product/product.module').then((m) => m.ProductModule) },

  {path: 'comment', loadChildren:() => import('./comments/comments.module').then((m) => m.CommentsModule)},

  { path: "user", loadChildren: () => import('./users/users.module').then((m) => m.UsersModule) },
  { path: "**", redirectTo: '/404' },
  { path: "404", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
