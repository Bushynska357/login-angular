import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Task } from 'src/app/models/task';
import { TodoService } from '../../todoService';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  // @ViewChild('box') box: ElementRef;

  lengthList;
  tasks$: Observable<Task[]>;
  tasks: Task[];
  focus = false;
  currentTime;
  taskName: string;
  day = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(new Date());
  month = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(new Date());
  numberOfDay = new Intl.DateTimeFormat('en-US', { day: 'numeric'}).format(new Date());
  date = new Date();

  constructor(public todoService: TodoService) { }

  ngOnInit(): any{
    this.tasks$ = this.todoService.currentTask$;
  }

  addTask(){
    const newTask = {
      isComplete: false,
      text: null,
      selected: false,
      time: +new Date(),
    };
    return this.todoService.createTask(newTask);
  }

  saveChanges(item: Task) {
    return this.todoService.updateTask(item);
  }

  removeTask(item){
    return this.todoService.removeTask(item);
  }
}
