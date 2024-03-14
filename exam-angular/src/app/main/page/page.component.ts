import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
post: Post | undefined;

constructor (private apiService: ApiService, private activatedRoute: ActivatedRoute){}

fetchPost(): void {
 // const id = this.activatedRoute.snapshot.params['_id']; /// look at id write
  //this.apiService.getPostId(id).subscribe(post => {
   // this.post = post;
  //})
}

}
