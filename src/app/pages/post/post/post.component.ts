import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  products:any={
    name: '',
    price: 0,
    sizes: [],
    colors: []
  };
  productsRecive(products:object){
  this.products=products
  
  }
  
}
