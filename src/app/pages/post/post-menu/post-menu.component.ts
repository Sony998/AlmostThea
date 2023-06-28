import { Component, Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-menu',
  templateUrl: './post-menu.component.html',
  styleUrls: ['./post-menu.component.scss']
})

export class PostMenuComponent {

  constructor(private http: HttpClient) { }


  @Output() message =new EventEmitter<object>()
  color:string="#ffffff"
  urlArray:string[]=[]
  size:string=""
  url:string=""
  tag:string=""
  male=false
  female=false
  product={
    name:String(),
    price:String(),
    relevance:Number(),
    colors:Array(), 
    tags:Array(),
    sizes:Array(),
    imgs:Array(),
    gender:Number(),
   
    }
    Emit(){  
      this.message.emit(this.product)
    
}   
    addSize(){
    this.product.sizes.push(this.size)
    this.size=""
    }
    addColor(){
      this.product.colors.push(this.color)

    }
    addUrl(){
   
      this.urlArray.push(this.url)
      this.product.imgs.push(this.urlArray)
      this.product.imgs[this.product.imgs.indexOf(this.urlArray)].push(this.product.imgs.indexOf(this.urlArray))
      this.urlArray=[]
      this.url=""
      console.log(this.product.imgs)
    }
    addTag(){
      this.product.tags.push(this.tag)
    }
    addGender(){

      if(this.male && this.female ){
        this.product.gender=3
      }else if(this.male){
        this.product.gender=1
      }else if(this.female){
        this.product.gender=2
    }else{
      this.product.gender=0
    }
    console.log(this.product)
   
}
onSubmit() {
  // Realiza la solicitud POST al servidor
  this.http.post('http://127.0.0.1:4000/product', this.product)
    .subscribe(
      response => {
        // Maneja la respuesta del servidor
        console.log(response);
      },
      error => {
        // Maneja los errores de la solicitud
        console.error(error);
      }
    );
}


}
