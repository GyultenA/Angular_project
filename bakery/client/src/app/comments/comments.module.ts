import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { AllComentsComponent } from './all-coments/all-coments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentRoutingModule } from './comment-routing.module';
import { DetailsCommentComponent } from './details-comment/details-comment.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AddCommentComponent,
    EditCommentComponent,
    AllComentsComponent,
    DetailsCommentComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,CommentRoutingModule, SharedModule
  ],
  exports:[AddCommentComponent, EditCommentComponent, AllComentsComponent]
})
export class CommentsModule { }
