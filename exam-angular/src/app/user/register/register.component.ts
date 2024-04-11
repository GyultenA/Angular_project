import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS, emailValidator } from 'src/app/shared/validator/email.validator';
import { matchPasswordsValidator } from 'src/app/shared/validator/match-pass';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator('password', 'rePassword')],
      }
    ),
  });

  constructor(private fb: FormBuilder, 
    private userService: UserService,
    private router: Router) { }

  get passGroup() {
    return this.form.get('passGroup');
  }

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const { username, email, passGroup: { password, rePassword } = {}, } = this.form.value;
    this.userService
      .register(username!, email!, password!, rePassword!)
      .subscribe(() => {
        this.router.navigate(['/auth/profile'])
        //this.router.navigate(['/auth/login'])
      })

    //console.log(this.form.value)
  }



}
