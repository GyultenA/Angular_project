import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { AllComentsComponent } from './all-coments/all-coments.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddCommentComponent,
    EditCommentComponent,
    AllComentsComponent
  ],
  imports: [
    CommonModule, FormsModule,
  ],
  exports:[AddCommentComponent, EditCommentComponent, AddCommentComponent]
})
export class CommentsModule { }
