import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts, SinglePost, UserPosts, nPost } from './types/usersType';

@Injectable({
  providedIn: 'root'
})



export class ApiService {

   URLUsers = 'https://testfisrt-default-rtdb.europe-west1.firebasedatabase.app/'
  //URLPost = 'https://examangularg-default-rtdb.firebaseio.com/';
  URLPost = 'https://agilebreath.backendless.app/api/data/allposts'

  constructor(private http: HttpClient) { }

getPosts (limit?: number){
 // let url = `${this.URLPost}/.json`;
 let url = `${this.URLPost}`

  if (limit){
  url +=`?limit=${limit}`
  }
  // return this.http.get<Posts[]>(url);
   return this.http.get<Posts[]>('https://agilebreath.backendless.app/api/data/allposts');
}

createPost(title:string, comment:string, imgUrl?:string){
  return this.http.post<Posts>('https://agilebreath.backendless.app/api/data/allposts', { title, comment})
}

getSinglePost (id:string){
  return this.http.get<Posts>(`https://agilebreath.backendless.app/api/data/allposts/${id}`)
}

getUserPosts(id:string){
  return this.http.get<UserPosts>(`https://agilebreath.backendless.app/api/data/allposts/${id}`)
}

deletePost(id:string){
  return this.http.delete<SinglePost>(`https://agilebreath.backendless.app/api/data/allposts/${id}`)
}

getUsPost(id:string){
  return this.http.get<nPost[]>(`https://agilebreath.backendless.app/api/data/ex/${id}`)
}

}
