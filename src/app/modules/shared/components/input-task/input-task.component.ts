import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.scss']
})
export class InputTaskComponent implements OnInit {


  @Input()  content;
  @Output() contentChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.content);
  }

  changeTask(){
    this.contentChange.emit(this.content);
  }

}
