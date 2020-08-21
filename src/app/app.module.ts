import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ManageComponent } from './manage/manage.component';
import { ActionComponent } from './action/action.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WaitingComponent } from './waiting/waiting.component';
import { AdddocumentComponent } from './adddocument/adddocument.component';

 
const ROUTES : Routes =[
  
  {path : ' ', component: HomeComponent},
  {path : 'home', component: HomeComponent},
  {path : 'manage', component: ManageComponent},
  
  
  {path : 'adddocument', component: AdddocumentComponent},
  // {path : 'waiting', component: WaitingComponent},



]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ManageComponent,
    ActionComponent,
    SidenavComponent,
    WaitingComponent,
    AdddocumentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
