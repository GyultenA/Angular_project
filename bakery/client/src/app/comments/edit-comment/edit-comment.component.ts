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
  comment = {} as Comment;

  constructor(private commentService: CommentService,
    private activeRoute: ActivatedRoute,
    private router: Router,

  ) {

  }


  ngOnInit(): void {
    const commentId = this.activeRoute.snapshot.params['commentId'];
    this.commentService.getOneComment(commentId).subscribe((data) => {
      this.comment = data;
    })

  }

  editComment(formComment: NgForm) {
    if (formComment.invalid) {
      return;
    }

    const title = formComment.value.title;
    const description = formComment.value.description;
    const id = formComment.value._id
    // const commentId = this.activeRoute.snapshot.params['commentId']

    this.commentService.editComment(id, title, description).subscribe((comment) => {
      this.comment = comment
    })

    this.router.navigate(['/catalog'])
  }

}
