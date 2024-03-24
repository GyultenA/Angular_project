import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrentPostComponent } from './current-post/current-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { SharedModule } from '../shared/shared.module';
import { PageRoutingModule } from './page-routing.module';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    CurrentPostComponent,
    AddPostComponent,
    MainComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageRoutingModule,
    FormsModule,
  ],
  exports:[DashboardComponent, 
    CurrentPostComponent, 
    AddPostComponent, MainComponent]
})
export class PageModule { }
