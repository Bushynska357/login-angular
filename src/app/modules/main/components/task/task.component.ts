import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/task';
import { TodoService } from '../../todoService';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
text;
  test;
  @Input() item: any;
  

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    console.log();
    
    this.test =  setInterval(() => this.test = Math.random() * 10, 1000);
  }

  saveChanges(item: Task): Subscription {
    return this.todoService.updateTask(item);
  }

  removeTask(item): Subscription {
    return this.todoService.removeTask(item);
  }

}
