import { Injectable, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User, UserForAuth } from '../types';

//interface User {
 // email: string;
 // name:string;
 // password: string;
//}



@Injectable({
  providedIn: 'root'
})
export class UserService {
 user: UserForAuth | undefined;

 USER_KEY = '[user]';

  get isLogged():boolean {
    return !!this.user
  }

  constructor() { 
    try {
      const localUser = localStorage.getItem(this.USER_KEY) || "";
      this.user= JSON.parse(localUser)
    } catch (error) {
      this.user = undefined;
    }
  }

  login():void{
    //for test
    this.user = {
      id: '5fa64ca72183ce1728ff3726',
      firstName: 'Petko',
      email: 'petkoivanov@abv.bg',
      password: '123123',
      phoneNumber: '123-123-123-213',
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout(): void {
    this.user= undefined;
    localStorage.removeItem(this.USER_KEY);
  }

  
  

  //ngOnInit(): void {
   // this.apiService.getAllUsers().subscribe(data => {
    //  console.log(data)
   // })
    //throw new Error('Method not implemented.');
  //}
}
