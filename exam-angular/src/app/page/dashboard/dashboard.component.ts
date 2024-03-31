import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Posts } from 'src/app/types/usersType';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allPosts: Posts[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService, private userService: UserService) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    //this.api.getPosts().subscribe(posts => {
      //console.log(posts);
    //  this.posts = posts;
      
   // })

   this.api.getPosts(5).subscribe({
    next: (posts) => {
      const sortDatesCB = (
        a: { created: string },
        b: { created: string }
      ) => (new Date(b.created) as any) - (new Date(a.created) as any);
      const lastPosts = posts.sort(sortDatesCB as any).slice(0, 5);
     // console.log(allPosts);
      this.allPosts = lastPosts;
    },
    error: (err) => {
      this.isLoading = false;
      //console.error('Error: ', err);
    },
  });
  }

}
