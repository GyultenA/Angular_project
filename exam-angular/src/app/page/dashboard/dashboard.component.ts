import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Posts } from 'src/app/types/usersType';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  posts: Posts[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) { }


  ngOnInit(): void {
    //this.api.getPosts().subscribe(posts => {
      //console.log(posts);
    //  this.posts = posts;
      
   // })

   this.api.getPosts(5).subscribe({
    next: (posts) => {
      console.log(posts);
      this.posts = posts;
    },
    error: (err) => {
      this.isLoading = false;
      //console.error('Error: ', err);
    },
  });
  }

}
