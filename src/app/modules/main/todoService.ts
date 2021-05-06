import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { Task } from 'src/app/models/task';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor(private http: HttpClient,
              public authService: AuthService
    ) {}

  getTasks(): Observable<Task>{
      return this.http.get<Task>(`${environment.baseUrl}/list`);
    }
}
