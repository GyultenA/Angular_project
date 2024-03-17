import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS, emailValidator } from 'src/app/shared/validator/email.validator';
import { matchPasswordsValidator } from 'src/app/shared/validator/match-pass';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  form = this.fb.group({
   username:['', [Validators.required, Validators.minLength(5)]],
   email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],

   passGroup: this.fb.group({
    password: ['',[Validators.required]],
    rePassword: ['',[Validators.required]],
    }, {
      Validators: [matchPasswordsValidator("password", "rePassword")],
    }),

  })

  constructor(private fb: FormBuilder){}

  get passGroup() {
    return this.form.get('passGroup');
  }

  register(): void {
    if(this.form.invalid){
      return;
    }

    console.log(this.form.value)
  }



}
