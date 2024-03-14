import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private userService: UserService, private router: Router) { }

  login(email:string, password:string): void {
//to do for now we are not handling data

    this.userService.login();
    this.router.navigate(['/profile'])
  }

  



}
