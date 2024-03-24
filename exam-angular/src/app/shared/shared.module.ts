import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { EmailDirective } from './validator/email.directive';
import { RouterModule } from '@angular/router';
import { SlicePipe } from './pipes/slice.pipe';
import { TimePipe } from './pipes/time.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    EmailDirective,
    SlicePipe,
    TimePipe,
  ],
  imports: [
    CommonModule, RouterModule,
  ],
  exports:[LoaderComponent, EmailDirective, SlicePipe, TimePipe],
})
export class SharedModule { }
