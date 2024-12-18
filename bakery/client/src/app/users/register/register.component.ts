import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';



import { UserService } from '../user.service';
import { EMAIL_DOMAINS, emailValidator } from 'src/app/utils/email_validator';
import { passMatch } from 'src/app/utils/pass-match';
import { ErrorComponent } from 'src/app/core/error/error.component';
import { ErrorService } from 'src/app/core/error/error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

isLoading: boolean = true;
hide = true;
hideRe = true;

private errorSubscription!: Subscription;

registerForm = this.fb.group({
firstName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
lastName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
username: ["",[Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('^[a-zA-Z0-9_-]+$')] ],
email: ["", [Validators.required, Validators.minLength(10),Validators.maxLength(50), emailValidator(EMAIL_DOMAINS),] ],

passGroup: this.fb.group({
  password: ["",Validators.required, Validators.minLength(4), Validators.maxLength(6)],
  rePassword: ["", [Validators.required]],
}, {validators: [passMatch('password', "rePassword")]}),
avatar: ["", [Validators.required, Validators.pattern(/https?:\/\/.+\.(jpg|jpeg|png|gif)/i)]]
})


get passGroup(){
  return this.registerForm.get('passGroup')
}



constructor(
  private fb: FormBuilder,
  private userApi: UserService,
  private router: Router,
) { }




onRegister(): void {
  if (this.registerForm.invalid) {
    return;
  }

  const {
    firstName,
    lastName,
    username,
    email,
    passGroup: { password, rePassword } = {},
    avatar,
  } = this.registerForm.value;

  this.userApi
    .register(
      firstName!,
      lastName!,
      username!,
      email!,
      password!,
      rePassword!,
      avatar!,
    ).subscribe(() => {
      this.router.navigate(['/about'])

    })
}

}

