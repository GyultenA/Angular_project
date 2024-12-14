import { Injectable } from "@angular/core";
import { UserService } from "../users/user.service";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({ providedIn: 'root' })

export class AuthActive implements CanActivate {

    constructor(private userApi: UserService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): | boolean
       | UrlTree
       | Observable<boolean | UrlTree>
       | Promise<boolean | UrlTree> {
        if (!this.userApi.isLoggedIn){
            return this.router.createUrlTree(['/user/login'])
        }
        return true;

    }
}