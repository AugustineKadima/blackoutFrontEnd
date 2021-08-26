import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAlertComponent } from './create-alert/create-alert.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { DashbordOverviewComponent } from './dashbord-overview/dashbord-overview.component';



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'create-alert', component: CreateAlertComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component:SignupComponent}
  
  
}
