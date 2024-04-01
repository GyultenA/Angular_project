import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './core/contact/contact.component';
import { BookingComponent } from './core/booking/booking.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/home' },
  { path: "home", component: HomeComponent },
  { path: "book", component: BookingComponent},
  {
    path: 'auth',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'page', loadChildren: ()=> import('./page/page.module').then((m)=> m.PageModule)
  },
  {path: 'contacts', component: ContactComponent},
  { path: 'error', component: ErrorComponent },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
