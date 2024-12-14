import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "../users/user.service";



export function guestActive(): CanActivateFn {
    return() => {
        const userApi = inject(UserService);
        const router = inject(Router);

        if(userApi.isLoggedIn){
            return router.createUrlTree(['/'])
        }

        return true;

    }
}