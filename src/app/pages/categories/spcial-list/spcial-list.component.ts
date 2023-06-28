import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../../models/product.model';
@Component({
  selector: 'app-spcial-list',
  templateUrl: './spcial-list.component.html',
  styleUrls: ['./spcial-list.component.scss']
})
export class SpcialListComponent {
query!: string; // Declaración de la propiedad 'id'
public products: Product[] = [];
constructor(
  
  private apiService: APIService,
  private route: ActivatedRoute
) { }

ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.query = params['query'];

    const apiUrl = 'http://localhost:4000/search/' + this.query;
    this.apiService.search(this.query, 0, 40).subscribe(
      (info) => {
        this.products = info as Product[];
        console.log(this.products)
      }
    );
  });
}
}

