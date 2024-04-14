import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { nPost } from 'src/app/types/usersType';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  username: string | undefined;

  npost: nPost [] = []

  private userId: string | undefined;

  constructor(private apiService: ApiService, 
    private userService: UserService,
    private router: Router,
  private http: HttpClient) {

    this.userService.user$.subscribe(user => {
      this.userId = user?.objectId;
      this.username = user?.username
    //  console.log(this.userId)
  })
   }

  addPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    
   let id = this.userId || "";
  
    const { title, description, imgUrl, } = form.value;
    //console.log(form.value);
    let username = this.username
   this.apiService.createPost(title, description, imgUrl, username).subscribe(() => {
     this.router.navigate(['/page/posts']);
   });

  //this.apiService.updatePost(id,title, description,imgUrl).subscribe(() => {
   // this.router.navigate(['/page/posts']);
  // })

 // this.http.put<nPost>(`https://agilebreath.backendless.app/api/data/usersexam/${id}`, {title,description, imgUrl}).subscribe(() => {
   // this.router.navigate(['/page/posts']);
 // })

  }



}
