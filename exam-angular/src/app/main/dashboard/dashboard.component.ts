import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  postslist: Post[]= [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService, private userService: UserService) { }

  get isLogged (): boolean {
    return this.userService.isLogged;
  }

  //ngOnInit(): void {
   // this.apiService.getAllPosts().subscribe(
    //  {
      //  next: (post) => {
          //console.log(post);
        //  this.postslist = post;
         // this.isLoading = false;
       // },
       // error: (err) => {
        //  this.isLoading= false;
         // console.log(`Error : ${err}`)

       // }

     // })





    //throw new Error('Method not implemented.');

    // this.apiService.getAllUsers().subscribe(data => {
    ////  console.log(data)
    //})
 // }

}
