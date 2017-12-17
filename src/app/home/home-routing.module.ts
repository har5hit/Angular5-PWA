import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { Route } from '@angular/router/src/config';
import { patch } from 'webdriver-js-extender';

const routes: Routes = [
  { path: '', component: HomeComponent, 
    children : [{ path: 'dashboard', component: DashboardComponent, pathMatch :'full' },
                {path: '', redirectTo:'dashboard', pathMatch :'full'}
               ]},
  { path: 'logout', loadChildren: 'app/login/login.component#LoginComponent' , pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
