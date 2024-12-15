import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.devel';
import { Observable } from 'rxjs';
import {Comment} from '../types/comment.type'

@Injectable({
  providedIn: 'root'
})


export class CommentService {

  constructor(private http: HttpClient) { }

  getAllComments(productId:string) {
    const { apiUrl } = environment;
    return this.http.get<Comment[]>(`${apiUrl}/comment/${productId}`, {withCredentials:true})
  }

  getOneComment(id:string){
    const {apiUrl} = environment;
    console.log(`service:${apiUrl}/comment/${id}` )
    return this.http.get<Comment>(`${apiUrl}/comment/${id}/details`, {withCredentials:true})
  }

  addComment(productId: string, title: string, description: string) {
    const { apiUrl } = environment;
    const payload = { productId, title, description };

    return this.http.post<Comment>(`${apiUrl}/comment/create`, payload, { withCredentials: true })
  }

  editComment(id: string, title: string, description: string) {
    const { apiUrl } = environment;
    const editFields = {
      title: title,
      description: description,
    }

    return this.http.put<Comment>(`${apiUrl}/comment/${id}/edit`, editFields, { withCredentials: true });
  }

  deleteComment(id:string){
    const {apiUrl} = environment;
    return this.http.delete(`${apiUrl}/comment/${id}`, {withCredentials:true})
  }

  votedHelpfulYes(id:string, userId:string){
    const { apiUrl} = environment;
    const payload = {userId};
    return this.http.put<Comment>(`${apiUrl}/comment/voteYes/${id}`, payload, {withCredentials:true});
  }

  votedHelpfulNo(id:string, userId:string){
    const {apiUrl}= environment;
    const payload = {userId};
    return this.http.put<Comment>(`${apiUrl}/comment/voteNo/${id}`, payload, {withCredentials:true})
  }


}
