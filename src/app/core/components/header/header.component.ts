import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 actionName:string="SignIn";
 @ViewChild('closeBtn')closeBtn!:ElementRef;

 isUserLoggedIn:boolean = false ;
  userDetails:any;
  // cartCounter!:Observable<number>
  cartCounter:number = 0 ;
  constructor(private auth:AuthService,private shared:SharedService) { }

  ngOnInit(): void {
    this.shared.cartCounterObs.subscribe((el:any)=>{
       this.cartCounter = el ;
    })

  
   let userData = this.auth.getUserDetailsFromLocalStorage();
   if(userData){
    this.isUserLoggedIn = true ;
    this.userDetails = userData;
   }
  }

  changeAction(action:string){
    this.actionName = action ;
  }

  getAction(flag:any){
     if(flag){
      this.closeBtn.nativeElement.click();
      this.isUserLoggedIn = true ;
      this.userDetails = this.auth.getUserDetailsFromLocalStorage();
     }    
  }
}
