import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Post, Theme } from './types/userstype';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes () {
    const {apiUrl} = environment;
   // return this.http.get<Theme[]>(`${apiUrl}classes/users`)
  }

  getPosts () {
    const { apiUrl } = environment;
    //return this.http.get<Post[]>(`${apiUrl}classes/posts`)
  }
}
