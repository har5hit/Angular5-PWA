import { Component, OnInit } from '@angular/core';
import { NgModel } from "@angular/forms";
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:AuthenticationService,private router:Router) { }

  ngOnInit() {
    this.loginService.logout()
  }

  login(form:any)
  {
      console.log(form)
      this.loginService.login(form.email,form.pwd).then((status)=>{
        console.log("home redirect"+this.router.url)
            this.router.navigateByUrl('/home',{ replaceUrl: true })
      })

  }

}
