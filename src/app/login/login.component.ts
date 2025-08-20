import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string='';
  password:string='';
  loginForm:FormGroup;

  constructor(private router:Router){
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  login(){
    debugger;
    this.username = this.loginForm.value['username'];
    this.password=this.loginForm.value['password'];
    console.log(this.password);
    alert(this.username+" "+this.password)
    if(this.username ==='AK' && this.password ==='ak@143')
    {
      this.router.navigate(['/home'])
    }
    else{
      alert('nope. not this time')
    }


  }

}
