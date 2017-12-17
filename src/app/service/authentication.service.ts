import { Injectable } from '@angular/core';
import { Promise } from 'q';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

  constructor(public router:Router) { }
  login(username: string, password: string):Promise<Boolean> {
    return Promise((resolve,reject) => {
      console.log("logged in")
      localStorage.setItem("currentUser",username+""+password)
      resolve(true)
    });
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    console.log("logged out")}
}
