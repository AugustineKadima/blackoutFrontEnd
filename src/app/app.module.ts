import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashbordOverviewComponent } from './dashbord-overview/dashbord-overview.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateAlertComponent } from './create-alert/create-alert.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { MyAlertsComponent } from './my-alerts/my-alerts.component';
import { EditAccountsComponent } from './edit-accounts/edit-accounts.component';
import { HelpComponent } from './help/help.component';
<<<<<<< HEAD
import { LandingPageHeaderComponent } from './landing-page-header/landing-page-header.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon'
// import {  }
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { DashHomeComponent } from './dash-home/dash-home.component';
import{MatMenuModule} from '@angular/material/menu';
import{MatIconModule} from '@angular/material/icon';
import{MatListModule} from '@angular/material/list';
import{MatDividerModule} from '@angular/material/divider';
import{MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatBadgeModule} from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';




>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    DashbordOverviewComponent,
    HeaderComponent,
    FooterComponent,
    CreateAlertComponent,
    AlertModalComponent,
    MyAlertsComponent,
    EditAccountsComponent,
    HelpComponent,
<<<<<<< HEAD
    LandingPageHeaderComponent,
    DashboardHeaderComponent,
=======
    DashHomeComponent,
    SidenavComponent,
  
    
   
    
  
  
  
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule
=======
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    MatSidenavModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    HttpClientModule,
>>>>>>> master
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
