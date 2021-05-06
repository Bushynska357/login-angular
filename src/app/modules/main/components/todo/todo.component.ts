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
  @ViewChild('box') box: ElementRef;

  lengthList;
  tasks$: Observable<Task[]>;
  tasks: Task[];
  focus = false;
  currentTime;


  constructor(public todoService: TodoService) { }

  ngOnInit(): any{
    this.tasks$ = this.todoService.currentTask$;
  }

  addInput(){
    this.currentTime = new Date().toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric' });
    console.log((this.tasks));
    let newTask = new Task();
    // this.tasks.unshift(newTask);
    newTask = {
      isComplete: false,
      text: null,
      selected: false,
      time : this.currentTime
    }
    
    return this.todoService.createTask(newTask);
  }

  saveTask(){

  }
}
