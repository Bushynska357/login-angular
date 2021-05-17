import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';
import { RouterModule } from '@angular/router';
import {  OrdinalPipe } from 'src/app/ordinal.pipe';
import { TodoRoutingModule } from './todo-routing.module';
import { RelativePipe } from 'src/app/relative-time.pipe';



@NgModule({
  declarations: [TodoComponent,  OrdinalPipe, RelativePipe ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoRoutingModule
  ],
  exports: [RouterModule]
})
export class MainModule {
 }
