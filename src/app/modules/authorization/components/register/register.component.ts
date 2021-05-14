import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('register', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translate(-600px, 0)'}),
        animate('1.2s', style({ opacity: 1, transform: 'translate(0, 0)' })),
      ]),
    ])
  ]
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  selectedRole;

  constructor(public authService: AuthService,
              public router: Router,
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      fullname: new FormControl('', Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      role: new FormControl('',Validators.required)
    });
  }

  submit(){
    if (this.form.valid){
      this.authService.register( this.form.controls.email.value,this.form.controls.fullname.value,
         this.form.controls.password.value, this.form.controls.role.value)
      .subscribe(res => {
     
        if (res){
          this.router.navigate(['', 'login']);
       }else if (res == null){
         window.alert('Something went wrong');
       }
      }
      );
    }
  }


  onChange(event){
    console.log(event);
    console.log(this.form.controls.role.value);
    
    this.selectedRole = event;
  }
}
