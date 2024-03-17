import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/shared/validator/email.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  domains = EMAIL_DOMAINS;

  constructor(private userService: UserService, private router: Router) { }

  //login(email:string, password:string): void {
//to do for now we are not handling data

   // this.userService.login();
   // this.router.navigate(['/profile'])
  //}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.userService.login();
    this.router.navigate(['/home']);
  }

  



}
