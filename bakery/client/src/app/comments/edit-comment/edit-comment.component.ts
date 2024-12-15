import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Comment} from '../../types/comment.type'

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  commentId: string = '';
  commentTitle: string = '';
  commentDescription: string = '';

  constructor(private commentService: CommentService,
    private activeRoute: ActivatedRoute,
    private router: Router,) {}


  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.commentId = params['commentId'];
console.log(this.commentId)
      this.commentService.getOneComment(this.commentId).subscribe({
        next:(data) => {
          this.commentTitle = data.title;
          this.commentDescription = data.description;
        },
        error: (err)=> {
          console.log('Error editing comment');
        }
      })
    })
   // const commentId = this.activeRoute.snapshot.params['commentId'];
    //this.commentService.getOneComment(commentId).subscribe((data) => {
     // this.comment = data;
    //})

  }

  editComment(formComment: NgForm) {
    if (formComment.invalid) {
      return;
    }

    const title = formComment.value.title;
    const description = formComment.value.description;
    const id = formComment.value._id
    // const commentId = this.activeRoute.snapshot.params['commentId']

    this.commentService.editComment(this.commentId, title, description).subscribe({
      next:() => {
        this.router.navigate(['/comment', this.commentId, 'details'])
      }, error:(err) => {
        console.log('Error editing comment', err);
      }
    })

  //  this.router.navigate(['/catalog'])
  }

}
