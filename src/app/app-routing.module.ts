import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './modules/authorization/components/login/login.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/authorization/authorization.module').then(m => m.AuthorizationModule)},
  { path: 'todo', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule), canActivate: [AuthGuard]},
  // { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
