import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class TheaCookieService {

  constructor(private cookieService: CookieService
    ) {   const localStorage = window.localStorage;}

 saveJsonCookie(nameCookie:string ,object:object) {
    const objetoSerializado = JSON.stringify(object);
    localStorage.setItem(nameCookie, objetoSerializado);
  }

  getCookie(nameCookie:string) {
    const valor = localStorage.getItem(nameCookie);

    if (valor) {
      const objetoDeserializado = JSON.parse(valor);
      return objetoDeserializado;
     
    } else {
      return [];
    }
}
}