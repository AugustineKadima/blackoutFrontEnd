import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { DashbordOverviewComponent } from './dashbord-overview/dashbord-overview.component';

const routes: Routes = [
  { path:'dash-home',component:DashHomeComponent },
  {path:'dashbord-overview', component:DashbordOverviewComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
