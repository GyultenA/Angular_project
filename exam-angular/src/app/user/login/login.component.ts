import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_DOMAINS } from 'src/app/shared/validator/email.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  domains = EMAIL_DOMAINS;

  constructor(private userService: UserService, private router: Router) { }

  //login(email:string, password:string): void {
  // this.userService.login();
  // this.router.navigate(['/profile'])
  //}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;

    this.userService.login(email, password).subscribe(() => {
    this.router.navigate(['/home']);
    })

  }
}
