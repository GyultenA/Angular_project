import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { SinglePost } from 'src/app/types/usersType';

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css']
})

export class CurrentPostComponent implements OnInit {

 singlePost= {} as SinglePost;


 constructor(private apiService: ApiService, private activeRoute: ActivatedRoute){}
 
 
  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) =>{
   //  console.log(data)
     const id = data['postId'];
     this.apiService.getSinglePost(id).subscribe((singlePost)=> {
    //  console.log(singlePost)
     this.singlePost= singlePost;
     })
    })
  }






}
