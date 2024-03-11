import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPostComponent } from './add-post/add-post.component';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule, MainRoutingModule,
  ],
  exports: [
    DashboardComponent,
    AddPostComponent,
  ]
})
export class MainModule { }
