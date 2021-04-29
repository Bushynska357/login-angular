import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  task: string;
  tasks = [];

  constructor() { }

  ngOnInit(): void {
  }

  addInput(){
    this.tasks.push(this.tasks.length);
  }
}
