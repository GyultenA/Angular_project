import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';
import { EmailDirective } from './validator/email.directive';




@NgModule({
  declarations: [
    LoaderComponent,
    EmailDirective,
  
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [LoaderComponent, EmailDirective,]
})
export class SharedModule { }
