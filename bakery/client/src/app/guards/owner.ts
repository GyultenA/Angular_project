import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UserService } from "../users/user.service";
import { ProductService } from "../services/product.service";
import { Observable } from "rxjs";



@Injectable({ providedIn: 'root' })
export class OwnerActive implements CanActivate {

  constructor(
    private userApi: UserService,
    private router: Router,
    private productApi: ProductService
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<boolean> {
    return new Observable<boolean>((observer) => {
        if(this.userApi.isLoggedIn){
            const itemId = next.paramMap.get('productId');

            if(itemId === null){
                this.router.navigate(['/404']);
                observer.next(false);
                observer.complete();
            }else {
                this.productApi.getOneProduct(itemId).subscribe((item) => {
                    if(item.owner._id === this.userApi.currentUserId){
                        observer.next(true);
                    }else {
                        this.router.navigate(['/catalog']);
                        observer.next(false);
                    }
                    observer.complete();
                })
            }
        } else {
            this.router.navigate(['/user/login']);
            observer.next(false);
            observer.complete();
        }

        
    })
      
  }

}