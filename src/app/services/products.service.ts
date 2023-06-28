import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  constructor(private http: HttpClient) {}

  getProducts(url:any): Observable<any> {
      return this.http.get<any>("http://localhost:4000/products/page=1");
    
}
}