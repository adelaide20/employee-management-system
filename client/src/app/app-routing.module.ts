import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ListComponent } from './pages/list/list.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'list', component:ListComponent},
  {path:'details/:emp_id', component:EmployeeComponent},
  {path:'404', component:ListComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
