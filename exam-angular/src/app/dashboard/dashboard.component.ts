import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Posts } from 'src/app/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  postslist: Posts[]= [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllPosts().subscribe(
      {
        next: (post) => {
          //console.log(post);
          this.postslist = post;
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading= false;
          console.log(`Error : ${err}`)

        }

      })
    //throw new Error('Method not implemented.');

    // this.apiService.getAllUsers().subscribe(data => {
    ////  console.log(data)
    //})
  }

}
