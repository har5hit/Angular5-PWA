import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule,MatCardModule,MatInputModule,MatIconModule, MatSidenav, MatSidenavModule, MatToolbarModule, MatNavList, MatListModule} from '@angular/material/';
import { FormsModule,NgForm } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    FormsModule
  ],
  declarations: []  
})
export class DesignModule { }
