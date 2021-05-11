import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { first, map, tap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { User } from './models/user';
import { CurrentUser } from './models/currentUser';
import {environment} from '../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<CurrentUser>;
  public currentUser$: Observable<CurrentUser>;
  public currentUser: CurrentUser;

  public expDate;
  public isRefresh = false;

  constructor(private http: HttpClient,
              private router: Router) {
    this.currentUser = this.getStorage();
    this.currentUserSubject = new BehaviorSubject<CurrentUser>(this.currentUser);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  login(email, password): Observable<any>{
    if (this.getStorage){
      this.removeCurrentStorage();
    }
    // console.log(  this.currentUserSubject.value);
    return this.http.post<any>(`${environment.baseUrl}/auth/sign-in`, { email, password })
    .pipe(tap( user => {
        if (user) {
          const payload = this.parseJwt(user.accessToken);

          user = {
            data: payload,
            accessToken: user.accessToken,
            refreshToken: user.refreshToken
          };
          this.setStorage(user);
        }
        return user;
      })
    );
  }

  parseJwt(token): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('')
      .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    return JSON.parse(jsonPayload);
  }

  public getStorage(): CurrentUser {
    const rawUser = localStorage.getItem('currentUser');

    if (!rawUser) {
      return null;
    }
    return JSON.parse(rawUser);
  }

  public setStorage(user): void{
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);

    this.currentUser = user;
  }

  public removeCurrentStorage(): void{
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);

    this.currentUser = null;
  }

  public refreshToken(): Observable<any> {
    console.log('REFRESH');

    this.isRefresh = true;

    return this.http.post<any>(`${environment.baseUrl}/auth/refresh`,  {refreshToken: this.currentUser.refreshToken}).pipe(
      tap(res => {
        console.log('refresh');
        const newPayload = this.parseJwt(res.accessToken);
        const newUser = {
          data: newPayload,
          accessToken: res.accessToken,
          refreshToken: res.refreshToken
        };
        console.log(newUser);

        this.isRefresh = false;
        this.setStorage(newUser);
      })
    );
    }
}
