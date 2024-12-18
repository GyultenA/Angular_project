import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

import { CommentService } from '../comment.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Comment } from '../../types/comment.type'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @Input() productId: string = "";

  paramsSubscription: Subscription = new Subscription();


  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.productId = params['productId'];
    //  console.log('Product Id', this.productId)
    })

  }

  addNewComment(formComment: NgForm) {

    if (formComment.invalid) {
      return;
    }

    const title = formComment.value.title;
    const commentBody = formComment.value.description;
   
    this.commentService.addComment(this.productId, title, commentBody).subscribe({
      next:() => {
        console.log('Comment added successfully');
        this.router.navigate(['/comment', this.productId])
      }
    })



  }



}
