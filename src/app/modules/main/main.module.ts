import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';
import { RouterModule } from '@angular/router';
import {  OrdinalPipe } from 'src/app/ordinal.pipe';
import { TodoRoutingModule } from './todo-routing.module';
import { RelativePipe } from 'src/app/relative-time.pipe';
import { AbilityModule } from '@casl/angular';
import { SharedModule } from '../shared/shared.module';
import { TaskComponent } from './components/task/task.component';



@NgModule({
  declarations: [TodoComponent, TaskComponent,  OrdinalPipe, RelativePipe, TaskComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoRoutingModule,
    SharedModule,
  ],
  exports: [RouterModule]
})
export class MainModule {
 }
