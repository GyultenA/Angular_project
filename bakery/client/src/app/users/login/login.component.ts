import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  hide = true;

  private errorSubscription!: Subscription;

  constructor(
    private userApi: UserService,
    private router: Router,
    // private errorHandlerService: ErrorHandler
  ) { }


  ngOnInit(): void {

  }

  onLogin(formLogin: NgForm) {
    if (formLogin.invalid) {
      return;
    }

    const email = formLogin.value.email;
    const password = formLogin.value.password;

    this.userApi.login(email, password).subscribe(() => {
      this.router.navigate(['/about'])
    })

  }

  ngOnDestroy(): void {

  }


}

export let isLoggedIn: boolean = true;
