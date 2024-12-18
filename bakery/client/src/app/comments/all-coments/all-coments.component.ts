import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CommentService } from '../comment.service';
import { UserService } from 'src/app/users/user.service';
import { Comment} from '../../types/comment.type'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-coments',
  templateUrl: './all-coments.component.html',
  styleUrls: ['./all-coments.component.css']
})
export class AllComentsComponent implements OnInit {
productId: string = "";
  
  isLoading: boolean = true;
  hasResult: boolean = true;
  comments: Comment[] | null = [];

  constructor(
    private commentService: CommentService,
    private userApi: UserService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  get currentUserId(): string | undefined {
    return this.userApi.currentUserId;
  }

  get loggedIn(): boolean {
    return this.userApi.isLoggedIn;
  }



  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['productId'];
       console.log('Product Id', this.productId);

       this.loadComments();
      })
  
  }

  loadComments(): void {
    this.isLoading = false;

    this.commentService.getAllComments(this.productId).subscribe({
      next: (data) => {
        this.comments = data;

        if (this.comments?.length ===0){
            this.hasResult = false
         } else {
          this.hasResult = true;
         }


        
      },
      error:(err)=> {
        console.log('Error comments', err);
        this.isLoading = false;
        this.hasResult = false;
      }
    })

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

  goBack(){
    this.location.back();
  }

}
