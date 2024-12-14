import { Component, Input, OnInit } from '@angular/core';
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

    //this.commentService.getAllComments(this.productId).subscribe((data) => {
    // this.comments = data;
    // console.log(this.comments);
    // console.log(this.hasResult)
    // console.log(this.comments.length)
    // console.log(this.productId)
    // this.hasResult= true;
    // return this.comments;
    
   // })

   // if (this.comments?.length ===0){
    //  this.hasResult = false
   // }
  
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

         console.log(this.hasResult)
         console.log('Comments:', this.comments)
        
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

}
