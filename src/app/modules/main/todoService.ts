import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor(private http: HttpClient,
    public authService:AuthService
    ) {}

  getTasks(){
      return this.http.get(`${environment.baseUrl}/list`, {
        headers:new HttpHeaders().set('x-auth-token', this.authService.currentUser.accessToken )
      })
    }
}