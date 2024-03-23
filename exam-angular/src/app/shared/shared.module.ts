import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { EmailDirective } from './validator/email.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoaderComponent,
    EmailDirective
  ],
  imports: [
    CommonModule, RouterModule,
  ],
  exports:[LoaderComponent, EmailDirective],
})
export class SharedModule { }
