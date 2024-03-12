import { Injectable, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllUsers().subscribe(data => {
      console.log(data)
    })
    //throw new Error('Method not implemented.');
  }
}
