import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';




@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
    // RouterModule.forChild(
    //   [
    //     {path: 'login', component: LoginComponent},
    //     {path: 'register', component: RegisterComponent},
    //     { path: '', redirectTo: 'login', pathMatch: 'full' }
    //   ]
    // ),
  ],
  exports: [RouterModule]
})
export class AuthorizationModule { }
