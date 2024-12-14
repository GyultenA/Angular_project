import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { UserAuth, UserDetails } from '../types/user.type';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserAuth | undefined;
  KEY = '[auth]';
  userSubsrcription: Subscription | undefined;


  constructor(
    private http: HttpClient,
    private router: Router,

  ) {
    const storedUser = sessionStorage.getItem(this.KEY);
    if (storedUser) {
      this.user$$.next(JSON.parse(storedUser));
    }

    this.userSubsrcription = this.user$.subscribe((user) => {
      this.user = user;
    })
  }

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  get currentUsername(): string | undefined {
    return this.user ? this.user.username : undefined;
  }

  get currentUserId(): string | undefined {
    return this.user ? this.user.id : undefined;
  }

  register(
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    rePassword: string,
    avatar: string,
  ) {
    const { apiUrl } = environment;

    return this.http.post<UserAuth>(`${apiUrl}/user/register`, {
      firstName, lastName, username, email, password, rePassword, avatar,
    }, { withCredentials: true })
      .pipe(tap((user) => {
        this.user$$.next(user);
        sessionStorage.setItem(this.KEY, JSON.stringify(user))
      }))
  }



  login(email: string, password: string) {
    const { apiUrl } = environment;

    return this.http.post<UserAuth>(`${apiUrl}/user/login`, { email, password }, { withCredentials: true })
      .pipe(tap((user) => {
        this.user$$.next(user);
        sessionStorage.setItem(this.KEY, JSON.stringify(user));
      }))
  }

  logout() {
    const { apiUrl } = environment;
    return this.http
      .post(`${apiUrl}/user/logout`, {}, { withCredentials: true })
      .pipe(tap(() => {
        this.user$$.next(undefined);
        sessionStorage.removeItem(this.KEY);
      }))
  }

  getMyUser(id: string) {
    const { apiUrl } = environment;
    return this.http.get<UserDetails>(`${apiUrl}/user/my-profile/${id}`, { withCredentials: true })
  }

  getProfile(id: string) {
    const { apiUrl } = environment;
    return this.http.get<UserDetails>(`${apiUrl}/user/profile/${id}`)
  }

  editMyUser(id: string, updatedFields: any) {
    const { apiUrl } = environment;
    return this.http.put<UserDetails>(`${apiUrl}/user/my-profile/${id}`, updatedFields, { withCredentials: true })
  }

  ngOnDestroy(): void {
    this.userSubsrcription?.unsubscribe()
  }



}
