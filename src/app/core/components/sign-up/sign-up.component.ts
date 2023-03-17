import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit,OnDestroy {
  signForm!:FormGroup;
  isGetOtp:boolean = false ;
  otpCounter:number = 0 ;

  sub!:Subscription
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
     this.initializeForm();
  }
  initializeForm(){
    this.signForm = this.fb.group({
      "userName":[],
      "password":[],
      "mobileNumber":[],
      "isMobNoVerified":[false]
    })
  }

  getOtp(){
    this.isGetOtp = true ;

    this.sub =  interval(1000).subscribe((el:number)=>{
        this.otpCounter = 60 - el ;
        if(this.otpCounter === 0){
          this.sub.unsubscribe();
        }
        console.log(el);
      })
  }

  verifyOtp(){
     this.sub.unsubscribe();
  }

  signUp(){
    console.log(this.signForm.value);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
