import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todoService';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  task: string;
  tasks$;

  constructor(public todoService:TodoService) { }

  ngOnInit(): void {
    this.tasks$ = this.getAllTasks()
    console.log(this.tasks$);
    
  }

  getAllTasks(){
   return this.todoService.getTasks()
  }

  addInput(){
    this.tasks$.push(this.tasks$.length);
  }
}
