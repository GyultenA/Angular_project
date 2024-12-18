import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../comment.service';
import { Comment } from '../../types/comment.type'
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-details-comment',
  templateUrl: './details-comment.component.html',
  styleUrls: ['./details-comment.component.css']
})
export class DetailsCommentComponent implements OnInit {
  commentId: string = '';
  comment= {} as Comment;
  isLoading: boolean = true;
  isOwner: boolean = false;
  author: string = '';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService,
    private userApi: UserService,
  ) { }

  get loggedIn(): boolean {
    return this.userApi.isLoggedIn;
  }

  get currentUser(): string | undefined {
    return this.userApi.currentUsername;
  }

  get currentUserId(): string | undefined {
    return this.userApi.currentUserId;
  }

  ngOnInit(): void {
   
    this.route.params.subscribe((params) => {
      this.commentId = params['commentId'];
      
      this.commentService.getOneComment(this.commentId).subscribe((data) => {
        this.comment = data;

        if (data.owner && data.owner._id === this.currentUserId) {
          this.isOwner = true;
        }

        
      })
    });
  }

  deleteComment(commentId: string): void {
    this.commentService.deleteComment(commentId).subscribe({
      next: ()=> {
        this.router.navigate(['/catalog'])
      },
      error:(err) => {
       // console.log('Error delete comment', err)
      }
     
    })
  }


}
