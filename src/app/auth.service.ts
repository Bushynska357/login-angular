import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { User } from './user';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser$: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  login(email, password): Observable<any>{
    if (this.getStorage){
      this.removeCurrentStorage();
    }

    console.log(email, password);
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

  public getStorage(): void{
    localStorage.getItem('currentUser');
  }

  public setStorage(user): void{
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  public removeCurrentStorage(): void{
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  // TODO methods for user managment
}
