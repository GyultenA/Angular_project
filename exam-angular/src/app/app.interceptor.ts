import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError } from "rxjs";
import { ErrorService } from "./error/error.service";


//const path = require('path');
//const server = express()

//server.use(cors({
//origin: 'http://localhost:4200',
///credentials: true
//}))


//server.use(express.json());
//server.use(cookiesParser());
//server.use(attach)

//export const app = express();
//export const corsConfig = {
   // credentials: true,
   // origin:'http://localhost:4200'  /// true,
//};
@Injectable()

export class AppInterceptor implements HttpInterceptor {

    //userURL = 'https://testfisrt-default-rtdb.europe-west1.firebasedatabase.app/'
    //userUrl='https://agilebreath.backendless.app/api/data/usersexam'

    constructor(private router: Router, private errorServie: ErrorService) {}
  
   

    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const accessToken = localStorage.getItem('accessToken');
         
      if (req.url.startsWith('https://agilebreath.backendless.app/api') && accessToken) {
        req = req.clone({
          setHeaders: {
            "X-Authorization": accessToken,
           
          }
        });
      }

      if (!req.headers.has('Content-Type')) {
        req = req.clone({
          setHeaders: {
           'Content-Type': 'application/json'
           
          }
        });
      }

        //req = req.clone ({
          //  withCredentials: true,
       // })


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

function express() {
  throw new Error("Function not implemented.");
}

function cookiesParser(): any {
  throw new Error("Function not implemented.");
}
  