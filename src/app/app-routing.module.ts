import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/authorization/authorization.module').then(m => m.AuthorizationModule)},
  { path: 'todo', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
