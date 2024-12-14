import { Component, NgModule} from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AllComentsComponent } from "./all-coments/all-coments.component";
import { AddCommentComponent } from "./add-comment/add-comment.component";
import { EditCommentComponent } from "./edit-comment/edit-comment.component";
import { DetailsCommentComponent } from "./details-comment/details-comment.component";


const routes: Routes = [
    {path:':productId', pathMatch:'full', component: AllComentsComponent},
    {path: 'create', component: AddCommentComponent},
    {path: ':commentId/edit', component:EditCommentComponent},
    {path: ':commentId/details', component: DetailsCommentComponent},

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CommentRoutingModule{}