import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { BirdCreateComponent } from './bird-register/bird-create/bird-create.component';
import { BirdReadComponent } from './bird-register/bird-read/bird-read.component';
import { BirdUpdateComponent } from './bird-register/bird-update/bird-update.component';


const routes: Routes = [
  {path:'', redirectTo:'dashboard',pathMatch:'full'},
  {path: 'login',component: LoginComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'bird-create', component: BirdCreateComponent},
  {path: 'bird-read', component: BirdReadComponent},
  {path: 'bird-update',component: BirdUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
