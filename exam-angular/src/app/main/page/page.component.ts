import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  post: Post | undefined;

  constructor(private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService:UserService) { }

    get isLogged ():boolean {
      return this.userService.isLogged;
    }

  ngOnInit(): void {
    this.fetchPost();

    //throw new Error('Method not implemented.');
  }

  fetchPost(): void {
    // const id = this.activatedRoute.snapshot.params['_id']; /// look at id write
    //this.apiService.getPostId(id).subscribe(post => {
    // this.post = post;
    //})
  }

}
