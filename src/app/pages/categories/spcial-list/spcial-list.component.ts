import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { APIService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../../models/product.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-spcial-list',
  templateUrl: './spcial-list.component.html',
  styleUrls: ['./spcial-list.component.scss']
})
export class SpcialListComponent implements OnInit, OnDestroy {
  query!: string; 
  products: Product[] = [];
  currentPage = 1;
  pageSize = 10;


  private routeSubscription!: Subscription;


  constructor(
    private apiService: APIService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.query = params['query'];
      this.currentPage = 1;
      this.products = [];
      const apiUrl = 'http://localhost:4000/search/' + this.query;
      this.apiService.search(this.query, 0, 40).subscribe(
        (info: Object) => {
          this.products = info as Product[];
          console.log(this.products);
        }
      );
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.currentPage++;
      this.getProducts();
    }
  }

  getProducts(): void {
    // Lógica para obtener productos adicionales según la página actual y el tamaño de página
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.apiService.search(this.query, startIndex, this.pageSize).subscribe(
      (info: Object) => {
        this.products.push(...(info as Product[]));
        console.log(this.products);
      }
    );
    }}