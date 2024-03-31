import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  constructor(private apiService: ApiService, private router: Router) { }

  addPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { title, description, imgUrl } = form.value;
    //console.log(form.value);
    this.apiService.createPost(title, description, imgUrl).subscribe(() => {
      this.router.navigate(['/posts']);
    });

  }



}
