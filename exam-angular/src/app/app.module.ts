import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
//import { MainComponent } from './page/main/main.component';
import { HomeComponent } from './home/home.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PageModule } from './page/page.module';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { UserModule } from './user/user.module';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
   // MainComponent,
    HomeComponent,
   ErrorComponent,
    

    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    PageModule,
    HttpClientModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
