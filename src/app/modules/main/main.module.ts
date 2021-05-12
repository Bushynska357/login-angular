import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';
import { RouterModule } from '@angular/router';
import { FormatPipe } from 'src/app/format.pipe';



@NgModule({
  declarations: [TodoComponent, FormatPipe ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      [
        {path: '', component: TodoComponent}
      ]
    ),
  ],
  exports: [RouterModule, FormatPipe]
})
export class MainModule {
 }
