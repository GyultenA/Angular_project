import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.devel';

@Injectable({
  providedIn: 'root'
})


export class CommentService {

  constructor(private http: HttpClient) { }

  addComment(product:string, title:string, description: string){
    const {apiUrl} = environment;
    const payload = {product, title, description};

    return this.http.post<Comment>(`${apiUrl}/comment/create`, payload, {withCredentials:true})
  }


}
