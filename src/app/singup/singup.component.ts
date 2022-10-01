import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private router:Router) { }
getform(val:any){
  let a=JSON.stringify(val)
  localStorage.setItem("user",a);
  alert("your are register sucssesfully go to login")
  this.router.navigate(['login']);
}
// link(){
  

// }



  ngOnInit(): void {
  }

}
