import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private router: Router) { }

  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email,Validators.required]),
      password: new FormControl(null,[Validators.required,Validators.minLength(6)])
    });
  }

  submit(){
   if(this.form.get('email').value == 'alina@gmail.com' && this.form.get('password').value == '111111'){
     this.router.navigate(['home']);
   }
    console.log("Form:", this.form);
    console.log("Form:", this.form.get('email').value)
  }
}
