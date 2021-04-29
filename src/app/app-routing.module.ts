import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/authorization/components/login/login.component';
import { TodoComponent } from './modules/main/components/todo/todo.component';

const routes: Routes = [
  { path: 'login', loadChildren: './modules/authorization/authorization.module#AuthorizationModule'},
  { path: 'todo', loadChildren: './modules/main/main.module#MainModule'},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
