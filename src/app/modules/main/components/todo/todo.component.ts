import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task';
import { TodoService } from '../../todoService';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  task: string;
  tasks$: Observable<Task>;

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.tasks$ = this.getAllTasks();
    console.log(this.tasks$);
  }

  getAllTasks(): Observable<Task>{
   return this.todoService.getTasks();
  }

  addInput(){
  //  return this.tasks$.push(this.tasks$.length);
  }
}
