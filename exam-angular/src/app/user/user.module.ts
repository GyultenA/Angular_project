import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PostuserComponent } from './postuser/postuser.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PostuserComponent
  ],
  imports: [
    CommonModule, 
    UserRoutingModule, 
    RouterModule, 
    SharedModule, 
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
