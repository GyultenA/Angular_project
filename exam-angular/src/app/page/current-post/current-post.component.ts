import { Component, Input } from '@angular/core';
import { Posts } from 'src/app/types/usersType';

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css']
})
export class CurrentPostComponent {
 @Input ("post") post = {} as Posts
}
