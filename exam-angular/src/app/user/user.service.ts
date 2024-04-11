import { Injectable, OnDestroy } from '@angular/core';
import { ProfileDetails, UserForAuth } from '../types/usersType';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
 private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined)
 public user$ = this.user$$.asObservable();

  user: UserForAuth | undefined;
  USER_KEY = '[user]';

 isLoggedIn:boolean=false;

  userSubscription: Subscription;

  profileDetails: ProfileDetails = {
    password: '',
    email: '',
  };

  
  get isLogged():boolean {
 // console.log(this.user);
    return !!this.user;
  }

  get getToggle(): boolean{
    return this.isLoggedIn = true;
  }

  constructor(private http: HttpClient) { 

 this.userSubscription = this.user$.subscribe((user) => {
    this.user = user;
 })
  //  try {
    //  const localUser = localStorage.getItem(this.USER_KEY) || "";
     // this.user= JSON.parse(localUser)
   // } catch (error) {
    //  this.user = undefined;
   // }
  }

  login(email:string, password: string){
   return this.http.post<UserForAuth>('https://agilebreath.backendless.app/api/data/usersexam', {email, password})
   .pipe(tap((user) => this.user$$.next(user)));

    //localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  register(username:string, email:string, password:string, rePassword:string){
    return this.http.post<UserForAuth> ('https://agilebreath.backendless.app/api/data/ex', {username, email, password, rePassword})
    .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http.get('https://agilebreath.backendless.app/api/data/usersexam', {})
   .pipe(tap(() => this.user$$.next(undefined)));
   // this.user= undefined;
   // localStorage.removeItem(this.USER_KEY);
  }

  //get user
  getProfile(){
   return this.http.get<UserForAuth>('https://agilebreath.backendless.app/api/data/usersexam')
   .pipe(tap((user) => this.user$$.next(user)))
  }

  updateProfile (username:string, email: string){
    return this.http.put<UserForAuth>('https://agilebreath.backendless.app/api/data/usersexam', {username, email})
    .pipe(tap(user => this.user$$.next(user)))
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  getData(email:string, password:string){
    this.profileDetails.email=email;
   this.profileDetails.password= password;
  }

  getUserId():void{

  }

  
}


