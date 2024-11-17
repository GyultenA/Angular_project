import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,RouterModule,
  ],
  exports:[HeaderComponent, FooterComponent, NavigationComponent]
})
export class CoreModule { }
