import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  addPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);
  }

  

}
