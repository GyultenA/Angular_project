import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sPost } from '../types/usersType';

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  addUrl = 'https://agilebreath.backendless.app/api/data/allposts'

  constructor(private http: HttpClient) { }

  add(data:sPost){
    let formData = new FormData();
    formData.append("title", data.title);
    formData.append('imageFile', data.imageFile);
    return this.http.post<sPost>(this.addUrl,formData);
  }

  getAll (){
    return this.http.get<sPost[]>(this.addUrl)
  }
}
