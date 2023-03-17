import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 actionName:string="SignIn"
  constructor() { }

  ngOnInit(): void {
  }

  changeAction(action:string){
    this.actionName = action ;
  }

}
