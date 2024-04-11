import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_DOMAINS } from 'src/app/shared/validator/email.validator';
import { ProfileDetails } from 'src/app/types/usersType';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  domains = EMAIL_DOMAINS;

  profileDetails: ProfileDetails = {
    password: '',
    email: '',
  };

  get isLoggedInUser(): boolean {
    return this.userService.isLogged;
 }


  constructor(private userService: UserService, private router: Router) { }

  //login(email:string, password:string): void {
  // this.userService.login();
  // this.router.navigate(['/profile'])
  //}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
   // console.log(email, password)

    this.userService.login(email, password);
    this.profileDetails.email=email
    this.profileDetails.password=password
  this.router.navigate(['/auth/profile'])

  this.userService.getData(email,password)

    //this.userService.login(email, password).subscribe((data) => {
      //this.profileDetails.email= email
     // this.profileDetails.password=password
   // this.router.navigate(['/auth/profile']);
   // })

  }
}


