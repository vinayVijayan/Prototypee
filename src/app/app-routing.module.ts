import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: 'store', component:LoginComponent},
  { path: 'customer', component:CustomerComponent},
  { path: 'dashboard',component:DashboardComponent},
  {path:'',component:TodolistComponent},
  {path:"e",component:LoginmoduleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
