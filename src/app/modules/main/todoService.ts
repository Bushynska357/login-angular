import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
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
    ) {}

  getTasks(): void{
   this.http.get<Task[]>(`${environment.baseUrl}/list`)
    .subscribe(res => {
      this.currentTaskSubject.next(res.reverse());
      console.log(this.currentTaskSubject.value);
    });
  }

  createTask(newTask): Subscription {
    const params = { method: 'POST', body: newTask };
    return this.http.post<Task>(`${environment.baseUrl}/list`, newTask).subscribe(x => {
      newTask.id = x.id;
      console.log(newTask);
      this.currentTaskSubject.next([newTask, ...this.currentTaskSubject.value]);
    });
  }

  updateTask(item): Subscription {
   console.log(item);
   return this.http.put<Task>(`${environment.baseUrl}/list/${item.id}`, item).subscribe(x => {
    this.currentTaskSubject.next(this.currentTaskSubject.value.splice(item, item.id - 1, x));
   });
  }

  removeTask(item): Subscription {
    return this.http.delete<Task>(`${environment.baseUrl}/list/${item.id}`).subscribe(res => {
      this.currentTaskSubject.next(this.currentTaskSubject.value.filter(x => x.id !== res.id));
    });
  }

}
