import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationService } from './service/authentication.service';

import {AuthGuardGuard} from './guards/auth-guard.guard'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { DesignModule } from './design/design.module';

const appRoutes: Routes = [
   { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
   { path: 'home', loadChildren: 'app/home/home.module#HomeModule', canActivate: [AuthGuardGuard] },
   { path: '', redirectTo : 'home', pathMatch : 'full' }

  ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DesignModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  providers: [AuthenticationService,AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
