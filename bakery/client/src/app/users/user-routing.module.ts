import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { ViewProfileComponent } from "./view-profile/view-profile.component";
import { ProfileEditComponent } from "./profile-edit/profile-edit.component";
import { guestActive } from "../guards/guest.guards";
import { AuthActive } from "../guards/auth.guards";

const routes: Routes = [
    {path:'login', component: LoginComponent, canActivate: [guestActive()]}, 
    {path: 'register', component: RegisterComponent, canActivate: [guestActive()]},
    {path: 'profile',
        children: [
            {path: '', pathMatch:"full", component: ProfileComponent, canActivate:[AuthActive]},
            {path: ":userId", component: ViewProfileComponent, canActivate:[AuthActive]},
            {path: "edit/:userId", component: ProfileEditComponent, canActivate:[AuthActive]}
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})

export class UserRoutingModule {

}