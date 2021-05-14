import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';
import { RouterModule } from '@angular/router';
import {  OrdinalPipe } from 'src/app/format.pipe';
import { TodoRoutingModule } from './todo-routing.module';



@NgModule({
  declarations: [TodoComponent,  OrdinalPipe ],
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
