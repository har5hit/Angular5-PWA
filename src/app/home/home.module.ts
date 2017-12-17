import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DesignModule } from '../design/design.module';
import { MediaMatcher } from '@angular/cdk/layout/';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    DesignModule
  ],
  declarations: [DashboardComponent, HomeComponent],
  providers:[MediaMatcher]
})
export class HomeModule { }
