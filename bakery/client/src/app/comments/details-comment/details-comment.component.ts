import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-comment',
  templateUrl: './details-comment.component.html',
  styleUrls: ['./details-comment.component.css']
})
export class DetailsCommentComponent implements OnInit{
  commentId: string = '';
 comments: Comment[] | null = [];


  ngOnInit(): void {
    
  }

}
