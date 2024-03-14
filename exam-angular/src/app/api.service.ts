import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Post, Theme, User } from './types';


//const apiUrl: 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
 // URLPost = 'https://agilebreath.backendless.app/api/data/allposts';
 // URLUsers = `https://agilebreath.backendless.app/api/data/usersexam`;

 URLUsers = 'http://localhost:3000/api/users'
 URLPost = 'http://localhost:3000/api/posts';
 URLThemes = 'http://localhost:3000/api/themes'

  constructor(private http: HttpClient) { }

  getAllPosts (){
    return this.http.get<Post[]>(this.URLPost);
  }

  getPostId(id:string) {
    return this.http.get<Post[]>(`${this.URLPost}/posts/${id}`)
  }

  
  getThemes() {
   
    return this.http.get<Theme[]>(this.URLThemes);
  }

  getAllUsers (){
    return this.http.get<User[]>(this.URLUsers);
  }
}
