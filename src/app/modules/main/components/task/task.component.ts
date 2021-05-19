import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/task';
import { TodoService } from '../../todoService';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {


  @Input() item: any;
  // get item() {
  //   console.log(this._item);
  //   return this._item;
  // }

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    // console.log(this.item);
  }

  saveChanges(item: Task): Subscription {
    return this.todoService.updateTask(item);
  }

  removeTask(item): Subscription {
    return this.todoService.removeTask(item);
  }

}
