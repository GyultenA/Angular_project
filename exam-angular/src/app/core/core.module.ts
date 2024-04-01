import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    BookingComponent
  ],
  imports: [
    CommonModule, RouterModule,
  ],
  exports: [ HeaderComponent, FooterComponent, ContactComponent, BookingComponent]
})
export class CoreModule { }
