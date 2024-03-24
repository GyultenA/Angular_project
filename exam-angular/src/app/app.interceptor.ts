import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError } from "rxjs";
import { ErrorService } from "./error/error.service";



@Injectable()

export class AppInterceptor implements HttpInterceptor {

    //userURL = 'https://testfisrt-default-rtdb.europe-west1.firebasedatabase.app/'
    //userUrl='https://agilebreath.backendless.app/api/data/usersexam'

    constructor(private router: Router, private errorServie: ErrorService) {}
  
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
         
        req = req.clone ({
            withCredentials: true,
        })


     // if (req.url.startsWith('/app')) {
       // req = req.clone({
        //  url: req.url.replace('/app', this.userURL),
        //  withCredentials: true, // Cookie -> JWT
        //});

      //console.log(req)

      return next.handle(req).pipe(
        catchError((err) => {
          if (err.status === 401) {
            this.router.navigate(['/auth/login']);
          } else {
            this.errorServie.setError(err);
            this.router.navigate(['/error']);
          }
  
          return [err];
        })
      );
    }
  }
  
  export const appInterceptorProvider: Provider = {
    multi: true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS,
  };
  