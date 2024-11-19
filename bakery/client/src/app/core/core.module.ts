import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ErrorComponent } from './error/error.component';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,RouterModule,
  ],
  exports:[HeaderComponent, FooterComponent, NavigationComponent, ErrorComponent]
})
export class CoreModule { }
