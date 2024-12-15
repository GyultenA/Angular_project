import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    CommonModule, SharedModule, ReactiveFormsModule, HttpClientModule,
  ],
  exports: [HomeComponent, AboutComponent]
})
export class MainModule { }
