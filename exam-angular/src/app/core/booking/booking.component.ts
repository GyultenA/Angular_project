import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  constructor(private userService: UserService){}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

}
