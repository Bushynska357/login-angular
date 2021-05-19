import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { Task } from 'src/app/models/task';
import { TodoService } from '../../todoService';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  lengthList;
  tasks$: Observable<Task[]>;
  tasks: Task[];
  focus = false;
  currentTime;
  taskName: string;
  date = new Date();
  role;

  constructor(public todoService: TodoService,
              public authService: AuthService
    ) { }

  ngOnInit(): any{
    this.tasks$ = this.todoService.currentTask$.pipe(tap(console.log));
    // this.role = this.authService.isAdmin();
    this.todoService.getTasks();
  }

  addTask(): Subscription{
    const newTask = {
      isComplete: false,
      text: null,
      selected: false,
      time: +new Date(),
    };
    return this.todoService.createTask(newTask);
  }

  // saveChanges(item: Task) {
  //   return this.todoService.updateTask(item);
  // }

  // removeTask(item){
  //   return this.todoService.removeTask(item);
  // }
}
