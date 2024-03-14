import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // isLoggedIn: boolean = false;

  constructor(private userService: UserService, private router: Router ) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get firstname(): string {
    return this.userService.user?.firstName || "";
  }

  logout (): void {
    this.userService.logout();
    this.router.navigate(['/home']);
  }

}
