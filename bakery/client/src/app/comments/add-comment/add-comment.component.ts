import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';

import { CommentService } from '../comment.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Comment} from '../../types/comment.type'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit{
 
  productId: string = '';

  private paramsSubscription: Subscription = new Subscription();
  @Output() currentProductData = new EventEmitter<{
    productId: string;
  }>();

  constructor(
    private commentService: CommentService, 
    private activeRoute: ActivatedRoute, 
    private router: Router,
   
  ){}

    ngOnInit(): void {
     this.paramsSubscription =  this.activeRoute.params.subscribe((data) => {
        const valueId = data['productId'];
        this.productId = valueId;
        console.log(this.productId)
      })
    }

    addNewComment(formComment:NgForm){

      if(formComment.invalid){
        return;
      }

      const currentProductId = this.productId;
      const title = formComment.value.title;
      const commentBody = formComment.value.description;

      this.commentService.addComment(currentProductId,title,commentBody).subscribe(() => {
        this.router.navigate(['/comment'])
      })



    }



}
