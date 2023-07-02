import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/products.service';
import { Product } from '../../../../../models/product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  currentPage: number = 0;
  pageSize: number = 10;
  url: string = '';
  private routeSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.url = params['id'];
      this.currentPage = 0;
      this.products = [];
      this.getProducts();
    });

    window.addEventListener('scroll', this.scrollHandler.bind(this));
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }

    window.removeEventListener('scroll', this.scrollHandler.bind(this));
  }

  scrollHandler() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.currentPage++;
      this.getProducts();
    }
  }

  getProducts() {
    this.productService.getProducts(this.currentPage).subscribe(
      (response) => {
        this.products = [...this.products, ...response.products];
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
