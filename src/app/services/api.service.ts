import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor( private http: HttpClient,) {
   
   }

getProduct(url:string) {
  return this.http.get(url)
}

search(value:any , page:any ,limit:any){

  const cleanedValue = encodeURIComponent(value);
  return this.http.get(`https://thea.fly.dev/products/search?query=${cleanedValue}&page=${page}&limit=${limit}`);

}}