import { Component, Input } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../../../models/product.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  id!: string; // Declaración de la propiedad 'id'
  title = 'api';
  public products: Product[] = [];
  url:string="";

  constructor(  private route: ActivatedRoute,private productService: ProductsService) { }

  ngOnInit() {
    this.url=this.route.snapshot.paramMap.get('id')!
    this.getProducts(this.url);
  }

  getProducts(url: string) {
    this.productService.getProducts(url).subscribe(
      (response) => {
        this.products = response.products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
