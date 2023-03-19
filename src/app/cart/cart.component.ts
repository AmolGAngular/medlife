import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
finalOrder:Order = new Order();


  constructor(private cart:CartService) { }

  ngOnInit(): void {
    let cartItems = this.cart.getProductsDataFromLocalStoarge();
    this.setCartItems(cartItems);
    this.calculateTotalPrice();
    console.log(this.finalOrder);
  }

  setCartItems(cartItems:any){
    let productArr:Product[] = [];
    cartItems.forEach((el:any) => {
      let productObj = new Product();
      productObj.productName = el.description;
      productObj.brand = el.brand;
      productObj.type = el.type;
      productObj.drugCode = el.drugCode;
      productObj.actualPrice = el.actualPrice ;
      productObj.discountedPrice = el.discountPrice;
      productObj.quantity = 1 ;
      productObj.productTotalPrice = Number(productObj.discountedPrice) * Number(productObj.quantity);
      productArr.push(productObj); 
    });

    this.finalOrder.products = productArr ;
  }

  calculateTotalPrice(){
   this.finalOrder.totalAmount = 0 ;
   this.finalOrder.totalDiscount = 10 ;
   this.finalOrder.products.forEach((el:Product)=>{
      this.finalOrder.totalAmount += Number(el.productTotalPrice);
    //  this.finalOrder.totalDiscount += (Nu)
   })
   this.finalOrder.finalAmountToPay = this.finalOrder.totalAmount - this.finalOrder.totalDiscount;
  }


  changeQuantity(index:number,action:string){
    let productItem = this.finalOrder.products[index];
    if(action == 'Increment'){
      productItem.quantity ++ ;
    }else {
      productItem.quantity -- ;
      if(productItem.quantity < 1){
        let res = confirm("Are You Sure");
        if(res){
          this.finalOrder.products.splice(index,1);
        }else {
          productItem.quantity++
        }
      }
    }
    productItem.productTotalPrice = Number(productItem.discountedPrice) * Number(productItem.quantity);
    this.calculateTotalPrice();
  }



}

class Order {
  orderId!:number;
  fullName!:string;
  mobileNo!:number;
  emailId!:string;
  address!:Address;
  products!:Product[];
  totalAmount!:number;
  totalDiscount!:number;
  finalAmountToPay!:number;
  deliveryType!:string;
}

class Address {
  line1!:string;
  line2!:string;
  city!:string;
  state!:string;
  pincode!:string;
  country!:string;
}

class Product {
  drugCode!:string;
  productName!:string;
  brand!:string;
  actualPrice!:number;
  discountedPrice!:number;
  quantity!:number;
  productTotalPrice!:number;
  type!:string
}
