import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Posts, User } from './types';


//const apiUrl: 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  URLPost = 'https://agilebreath.backendless.app/api/data/allposts';
  URLUsers = `https://agilebreath.backendless.app/api/data/usersexam`;

  constructor(private http: HttpClient) { }

  getAllPosts (){
    return this.http.get<Posts[]>(this.URLPost);
  }

  getAllUsers (){
    return this.http.get<User[]>(this.URLUsers);
  }
}
