import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
    nagesh:any
    LoginFrmList=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      pwd:new FormControl('')
    })
    
  
  }
  


