import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MainModule,
    HttpClientModule,
    UsersModule,
    ProductModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
