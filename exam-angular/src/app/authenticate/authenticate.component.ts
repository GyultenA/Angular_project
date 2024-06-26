import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit{
  isLoggedIn = false;
  
  constructor (private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLogged;
    if (!this.isLoggedIn) {
      this.router.navigate(['/home'])
    }
  }
  
  //isAuthenticating = true;
  //constructor (private userService: UserService) {}
  //ngOnInit(): void {
   // this.userService.getProfile().subscribe({
    //  next: () => {
      //  this.isAuthenticating = false;
      //},
     /// error: () => {
       // this.isAuthenticating = false;
      //},
      //complete: () => {
       // this.isAuthenticating = false;
     // },
    //});
  //}

}
