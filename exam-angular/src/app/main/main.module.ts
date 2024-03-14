import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPostComponent } from './add-post/add-post.component';
import { MainRoutingModule } from './main-routing.module';
import { PageComponent } from './page/page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    AddPostComponent,
    PageComponent
  ],
  imports: [
    CommonModule, MainRoutingModule,SharedModule
  ],
 exports: [
   DashboardComponent,
   AddPostComponent,
  PageComponent,
  ]
})
export class MainModule { }
