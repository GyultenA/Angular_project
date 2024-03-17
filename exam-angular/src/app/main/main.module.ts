import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPostComponent } from './add-post/add-post.component';
import { MainRoutingModule } from './main-routing.module';
import { PageComponent } from './page/page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { WelcomeComponent } from '../welcome/welcome.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AddPostComponent,
    PageComponent,
  ],
  imports: [
    CommonModule, 
    MainRoutingModule,
    SharedModule, 
    FormsModule,
    //RouterModule
  ],
 exports: [
   DashboardComponent,
   AddPostComponent,
  PageComponent,
  ]
})
export class MainModule { }
