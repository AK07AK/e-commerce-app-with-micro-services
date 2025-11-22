import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
   private username:string='';
   private emailId:string = '';
    private password:string='';
    signupForm:FormGroup;
  
    constructor(private router:Router){
      this.signupForm = new FormGroup({
        username: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required]),
        emailId: new FormControl('',[Validators.required])
      })
    }
  
    signup(){
      debugger;
      this.username = this.signupForm.value['username'];
      this.password=this.signupForm.value['password'];
      this.emailId=  this.signupForm.value['emailId'];
      console.log(this.password);
     
      if(this.signupForm.valid)
      {
        this.router.navigate(['/home'])
        return;
      }
      else{
        alert('All fields are required. Please fill')
        return;
      }
  
  
    }
  

}
