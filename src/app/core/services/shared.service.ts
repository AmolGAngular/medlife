import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  cartCounter:BehaviorSubject<number> = new BehaviorSubject(0);
  cartCounterObs = this.cartCounter.asObservable();

  emitItem(count:number){
     this.cartCounter.next(count);
  }
  
}
