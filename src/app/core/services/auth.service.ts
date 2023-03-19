import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserDetailsFromLocalStorage(){
  let userData:any; 
  userData = localStorage.getItem("userDetails");
   if(userData){
    userData = JSON.parse(userData);
   }
   return userData ;
  }
}
