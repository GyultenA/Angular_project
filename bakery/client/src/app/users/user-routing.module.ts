import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { ViewProfileComponent } from "./view-profile/view-profile.component";
import { ProfileEditComponent } from "./profile-edit/profile-edit.component";

const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
  //  {path:'logout', component:LoginComponent},
    {path: 'profile',
        children: [
            {path: '', pathMatch:"full", component: ProfileComponent},
            {path: ":userId", component: ViewProfileComponent},
            {path: "edit/:userId", component: ProfileEditComponent}
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})

export class UserRoutingModule {

}