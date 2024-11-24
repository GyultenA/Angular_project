import { Component, Inject, OnInit } from '@angular/core';

import { CommentService } from '../comment.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit{
  productId: string = '';

  constructor(
    private commentService: CommentService, private activeRoute: ActivatedRoute){}

    ngOnInit(): void {
      this.activeRoute.params.subscribe((data) => {
        const valueId = 'productId';
        this.productId = valueId;
      })
    }

    addNewComment(formComment:NgForm){

      if(formComment.invalid){
        return;
      }

      const productId = this.productId;
      const title = formComment.value.title;
      const commentBody = formComment.value.description;

      this.commentService.addComment(productId,title,commentBody)



    }



}
