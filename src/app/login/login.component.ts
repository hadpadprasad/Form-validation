import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router) { }
  loginval:any={};
  out:any=""
  getdata(value:any){
    this.loginval=value

    let data=JSON.parse( localStorage.getItem('user'));
   console.log(data)
   if((this.loginval.username=="")){
    this.out="Please Enter Username**"
   }
   else if((this.loginval.password=="")){
    this.out="Please Enter Password**"

   }
   else if((this.loginval.username==data.username)&&(data.Password==this.loginval.Password)){
    this.out="login sucssesfully!!"
  }
  else{
    alert("please Enter correct username & password**")
  }

}
 
  
  
  }

  
   

