import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from '../guards/login-guard/login.guard';

const routes: Routes = [
  {path:'',component:AuthComponent,children:[
    {path:'login',component:LoginComponent,canActivate:[LoginGuard]},
    {path:'',redirectTo:'login'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
