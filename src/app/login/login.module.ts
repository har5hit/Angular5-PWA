import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { DesignModule } from '../design/design.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    DesignModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
