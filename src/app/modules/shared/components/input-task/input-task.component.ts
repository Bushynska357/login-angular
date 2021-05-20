import {  Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.scss']
})
export class InputTaskComponent implements OnInit{

  state = true;
  @Input()  content;
  @Output() contentChange = new EventEmitter<string>();
  @ViewChild('input') myInputField: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(this.content);
    console.log(this.content.length);



  }

  changeTask(event){

    this.state = true;


    this.content = event.target.value;
    console.log(event.target.value);
    this.contentChange.emit(this.content);
  }

  changeOnInput(){

    this.state = false;
    setTimeout(() => { // this will make the execution after the above boolean has changed
      this.myInputField.nativeElement.focus();
      this.myInputField.nativeElement.select();
    }, 0);
    console.log(this.state);

  }





}
