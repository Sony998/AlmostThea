import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public baseUrl = 'https://thea.fly.dev/products';

  constructor(private http: HttpClient) {}

  getProducts(page: number): Observable<any> {
    const url = `${this.baseUrl}/page=${page}`;
    return this.http.get<any>(url);
  }

  getProductsbyGenre(page: number, genre: number): Observable<any> {
    const url = `${this.baseUrl}/gender/${genre}/page=${page}`;
    return this.http.get<any>(url);
  }
}