import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { Task } from 'src/app/models/task';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private currentTaskSubject = new BehaviorSubject<Task[]>([]);
  public currentTask$ = this.currentTaskSubject.asObservable();

  constructor(private http: HttpClient,
              public authService: AuthService
    ) {
      // this.currentTaskSubject = new BehaviorSubject<Task>();
      // this.currentTask$ = this.currentTaskSubject.asObservable();
      this.getTasks();
    }

  getTasks(): void{
   this.http.get<Task[]>(`${environment.baseUrl}/list`)
    .subscribe(res => {
      console.log(res[res.length - 1]);
      this.currentTaskSubject.next(res);
      
    });

    // return tasks$;

  }

  createTask(newTask){
    return this.http.post<Task>(`${environment.baseUrl}/list`, newTask).subscribe(x => {
      this.currentTaskSubject.next([newTask, ...this.currentTaskSubject.value]);
    });
  }
}
