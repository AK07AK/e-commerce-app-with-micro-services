import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  constructor(){
    this.signupForm = new FormGroup({
      password: new FormControl('',[Validators.required,Validators.minLength(5)]),
      retypePassword: new FormControl('',[Validators.required,Validators.minLength(5)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      loginType: new FormControl('',[Validators.required])

    })

  }
//toDO
//validate if both the password are corre

  signup(){
    
    
  }
}

