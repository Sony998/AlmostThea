import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TheaCookieService } from './../../services/thea-cookie.service';
import { CommonModule } from '@angular/common';
import { APIService } from '../../services/api.service';
@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.scss']
})
export class ShoppingCarComponent implements OnInit {
  discountCode: string = '';
  cookie = [{
    theaId:"",
    title: "",
    price: "",
    img: [],
    selectedSize: "",
    selectedColor: "",
    quantity: "",
  }];
  subtotal=0
  send=5000
  discount: number =0;
  total=0

  constructor(private location: Location, private theaCookie: TheaCookieService, private apiService: APIService) {  }

  ngOnInit() {
    this.cookie = this.theaCookie.getCookie("shoppingcar");
    this.calcPrice(this.cookie)
  }
  checkInputLength(){
    if (this.discountCode.length === 5) {
      this.apiService.getProduct("http://localhost:4000/discount/"+this.discountCode).subscribe(
        (info:any) => {
          this.discount = info.discount;
          this.theaCookie.saveJsonCookie("code",info.code)
          this.calcPrice(this.cookie)
        }
        
      );
      
    
    }else {
      this.discount = 0;
      this.theaCookie.saveJsonCookie("code", {"code":"nonos","discount":"0"});
    }
  }
  goBack() {
    this.location.back();
  }
  remove(i:number){
    this.cookie.splice(i, 1);
    this.theaCookie.saveJsonCookie("shoppingcar",this.cookie)
  }
calcPrice(array:any){
  this.subtotal = 0
    for (let i = 0; i < array.length; i++) {
  this.subtotal += parseFloat( array[i].price);
}
this.total=((this.subtotal + this.send)/100)*(100-this.discount)
}

}
