import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor (
    private userServise: UserService,
    private router: Router,
  ){}

  get loggedIn(): boolean {
    return this.userServise.isLoggedIn;
  }

  get currentUser():string | undefined{
    return this.userServise.currentUsername;
  }

  logout(){
    this.userServise.logout().subscribe(()=> {
      this.router.navigate(['/user/login'])
    })
  }

}
