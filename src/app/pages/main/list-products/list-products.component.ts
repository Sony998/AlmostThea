import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/products.service';
import { Product } from '../../../../../models/product.model';
import { ProductUpdateButtonService } from 'src/app/services/product-update-button-service.service';
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
  private buttonClickSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private buttonInfoService: ProductUpdateButtonService
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.url = params['id'];
      this.currentPage = 0;
      this.products = [];
      this.getProducts();
    });

    window.addEventListener('scroll', this.scrollHandler.bind(this));

    this.buttonClickSubscription = this.buttonInfoService.getButtonClick$().subscribe(() => {
      const buttonInfo = this.buttonInfoService.getButtonInfo();
      if (buttonInfo.genre !== 0) {
        this.currentPage = 0;
        this.products = [];
        this.getProductsByGenre(buttonInfo.genre);
      } else {
        this.getProducts();
      }
    });
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }

    if (this.buttonClickSubscription) {
      this.buttonClickSubscription.unsubscribe();
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
        console.log(response)
        this.products = [...this.products, ...response.products];

      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  getProductsByGenre(genre: number) {
    this.productService.getProductsbyGenre(0, genre).subscribe(
      (response) => {
        console.log(response)
        this.products = [...this.products, ...response.products];
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}