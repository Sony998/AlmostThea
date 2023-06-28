import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss']
})
export class EditMenuComponent {
i=0
x=0
value:any
@Input() product:any;


removeColor(index: number) {
  this.product.colors.splice(index, 1);
}
newPositions(array:string[]){
  for (let i = 0; i < array.length; i++) {
    this.product.imgs[i][1]=[i]
  }
}

removeImg(index: number){
  this.product.imgs.splice(index, 1)
  this.newPositions(this.product.imgs)
}

move(element:number[]){

this.product.imgs.splice(this.product.imgs.indexOf(element),1)
this.product.imgs.splice(element[1],0,element)
this.newPositions(this.product.imgs)
}

removeTag(index:any){
  this.product.tags.splice(index, 1);
}
removeSize(index:any){
  this.product.sizes.splice(index, 1)
}
}
