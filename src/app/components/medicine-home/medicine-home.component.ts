import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-medicine-home',
  templateUrl: './medicine-home.component.html',
  styleUrls: ['./medicine-home.component.scss']
})
export class MedicineHomeComponent implements OnInit {
  pincode : string = "";
  pincodeDetails:any ;
  displayErrorMessage:boolean = false ;
  showDefaultPinCode : boolean = true ;
  constructor(private http:HttpService) { }

  ngOnInit(): void {
  }

  VerifyPincode(){
    const endPoint = "pin-code-details?"+"pincode="+this.pincode ;
     this.http.getDataFromServer(endPoint).subscribe((el:any)=>{
      if(el && el.length > 0){
        this.pincodeDetails = el[0];
        this.displayErrorMessage = false ;
        this.showDefaultPinCode = false ;
      }else {
         this.displayErrorMessage = true ;
         this.showDefaultPinCode = true ;
      }
     })
  }


}
