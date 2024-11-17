import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  
  {path:"about", component:AboutComponent},

  {path: "user", loadChildren: () => import('./users/users.module').then((m) => m.UsersModule)},
  {path:"**", redirectTo: "/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
