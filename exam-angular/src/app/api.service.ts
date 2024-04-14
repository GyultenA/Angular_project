import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts, SinglePost, UserPosts, nPost, sPost } from './types/usersType';

@Injectable({
  providedIn: 'root'
})



export class ApiService {

   URLUsers = 'https://testfisrt-default-rtdb.europe-west1.firebasedatabase.app/'
  //URLPost = 'https://examangularg-default-rtdb.firebaseio.com/';
  URLPost = 'https://agilebreath.backendless.app/api/data/allposts'

httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": 'application/json'
  })
}

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

createPost(title:string, comment:string,  username: string, imgUrl?:string,){
  return this.http.post<Posts[]>('https://agilebreath.backendless.app/api/data/allposts', { title, comment, username})
}

getSinglePost (id:string){
  return this.http.get<Posts>(`https://agilebreath.backendless.app/api/data/allposts/${id}`)
}

getUserPosts(id:string){
  return this.http.get<sPost[]>(`https://agilebreath.backendless.app/api/data/allposts/${id}`)
}

deletePost(id:string){
  return this.http.delete<SinglePost>(`https://agilebreath.backendless.app/api/data/allposts/${id}`)
}

getUsPost(id:string){
  return this.http.get<sPost[]>(`https://agilebreath.backendless.app/api/data/ex/${id}`)
}

updatePost(title:string, comment:string, imgUrl?:string, id?: string){
  return this.http.put<nPost>(`https://agilebreath.backendless.app/api/data/ex/${id}`, {title,comment})

}

//getAllposts2(){
 // return this.http.get<nPost[]>(`https://agilebreath.backendless.app/api/data/ex/`)
//}

getAllposts2(){
  return this.http.get<nPost[]>('https://agilebreath.backendless.app/api/data/usersexam?loadRelations=pass')
}

getAllUserPost(id: string){
  return this.http.get<nPost[]>(`https://agilebreath.backendless.app/api/data/usersexam/${id}?loadRelations=pass`)
}

}
