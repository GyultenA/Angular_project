import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { PageComponent } from "./page/page.component";
import { AuthActivate } from "../core/guards/auth";

const routes: Routes = [
    {
        path: "posts",
        children: [
            { path: "", pathMatch: 'full', component: DashboardComponent }
        ]
    },
    { path: ':postsId', component: PageComponent },
    { path: 'add-post', component: AddPostComponent, 
    //canActivate: [AuthActivate]
 }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainRoutingModule { }