import { Component, EventEmitter, Output } from '@angular/core';
import { APIService } from '../../../services/api.service';
import {map,finalize} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
constructor(private router: Router,
  
    private apiService: APIService
  ) { }
showSquare: boolean = false;

valueInput=""
navState=false  
data: any[] = [];

@Output() stateNavMenu = new EventEmitter();
toggle(){
 this.navState=!this.navState
 this.stateNavMenu.emit(this.navState)
}

onInputChange(event: any) {
  // Aquí puedes agregar la lógica que deseas ejecutar cuando se ingrese texto en el input
  this.showSquare = true;

  


}
onEnter(event: any) {
  // Aquí puedes agregar la lógica que deseas ejecutar cuando se presione Enter
  this.router.navigate(['/search/'+this.valueInput]);
  // Ejemplo: Ejecutar una función en el componente
  this.showSquare = false;
}
search(valueInput: any) {
  this.apiService.search(valueInput,0,10).pipe(
    map((response: any) => response.map((product: any) => product.name))
  ).subscribe((names: string[]) => {
    this.data = names;
    console.log(this.data);
  });
}


formatAsURL(item: string): string {
  return encodeURIComponent(item);
}
noshow(event: any) {
  // Aquí puedes agregar la lógica que deseas ejecutar cuando se ingrese texto en el input
  this.showSquare = false;

  


}}