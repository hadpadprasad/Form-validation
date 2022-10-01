import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  {path:'',redirectTo:'singup',pathMatch:"full"},
  {path:"singup",component:SingupComponent},
  {path:"login",component:LoginComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
