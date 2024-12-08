import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { UserService } from 'src/app/users/user.service';
import { Comment} from '../../types/comment.type'

@Component({
  selector: 'app-all-coments',
  templateUrl: './all-coments.component.html',
  styleUrls: ['./all-coments.component.css']
})
export class AllComentsComponent implements OnInit {
  isLoading: boolean = true;
  hasResult: boolean = true;
  comments: Comment[] | null = [];

  constructor(
    private commentService: CommentService,
    private userApi: UserService,
  ) { }

  get currentUserId(): string | undefined {
    return this.userApi.currentUserId;
  }

  get loggedIn(): boolean {
    return this.userApi.isLoggedIn;
  }



  ngOnInit(): void {
    this.commentService.getAllComments().subscribe((data) => {
     this.comments = data;
     console.log(this.comments);
     console.log(this.hasResult)
     console.log(this.comments.length)
     this.hasResult= true;
     return this.comments;
    
    })

    if (this.comments?.length ===0){
      this.hasResult = false
    }
  

  }

  voteHelpful(id: string): void {
    const userId = this.currentUserId;

    if (userId) {
      this.commentService.votedHelpfulYes(id, userId).subscribe((data) => {
        this.ngOnInit();
      })
    }
  }

  voteNoHelpful(id: string): void {
    const userId = this.currentUserId;

    if (userId) {
      this.commentService.votedHelpfulNo(id, userId).subscribe((data) => {
        this.ngOnInit();
      })
    }
  }

}
