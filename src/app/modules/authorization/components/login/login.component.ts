import { TreeError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(public router: Router,
              public authService: AuthService
    ) { }

  ngOnInit(): void{
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  submit(): void {
    console.log( 'Form:', this.form.controls.password.value);
    if (this.form.valid){
      this.authService.login( this.form.controls.email.value, this.form.controls.password.value)
      // .pipe(catchError ( err => {
      //   console.log(err);
      //   return of(null);
      // } ))
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['todo']);
      });
    }

  }
}
