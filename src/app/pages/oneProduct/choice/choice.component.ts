import { ShoppingCarComponent } from './../../shopping-car/shopping-car.component';
import { Component, Input } from '@angular/core';
import { TheaCookieService } from './../../../services/thea-cookie.service';
@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent {
  constructor(private theaCookie: TheaCookieService) {}

  @Input() data: any = {
    
    name: 'Nombre del producto',
    price: 0,
    sizes: [],
    colors: [],
  };
  shop={
    theaId: "",
    title:"",
    price:"",
    img:"",
    quantity:1,
    selectedColor : '',
  selectedSize : '',}
  
  cookie: any[] = []; 

  clickedIndex: number | null = null;
  clickedSizeIndex: number | null = null;

  addBorderClass(index: number) {
    if (this.clickedIndex !== null) {
      this.clickedIndex = null; // Restablecer el estado del elemento anterior
    }
    this.clickedIndex = index; // Establecer el estado del elemento actual
    this.shop.selectedColor = this.data.colors[index];
  }

  addSizeClass(index: number) {
    if (this.clickedSizeIndex !== null) {
      this.clickedSizeIndex = null; // Restablecer el estado del elemento anterior
    }
    this.clickedSizeIndex = index; // Establecer el estado del elemento actual
    this.shop.selectedSize = this.data.sizes[index];
  }
  addCar(){
    this.cookie=this.theaCookie.getCookie("shoppingcar")
    this.shop.theaId=this.data._id
    this.shop.title=this.data.name
    this.shop.price=this.data.price
    this.shop.img=this.data.imgs[0]
    this.cookie.push(this.shop)
    this.theaCookie.saveJsonCookie("shoppingcar",this.cookie)
  }
}
