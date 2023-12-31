import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  id!: string; // Declaración de la propiedad 'id'

  product: any = {
    name: 'Nombre del producto',
    price: 0,
    sizes: [],
    colors: []
  };
  imgs = [];
  data: any;
  constructor(
    private route: ActivatedRoute,
    private apiService: APIService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log(this.id); 

    const apiUrl = 'https://thea.fly.dev/product/' + this.id;

    this.apiService.getProduct(apiUrl).subscribe(
      (info) => {
        this.product = info;
        this.imgs = this.product.imgs;
      }
    );
  }

  stateToggle = false;

  stateOfmenu(navState: any) {
    this.stateToggle = navState;
  }
   goBack() {
    this.location.back();
  }
}




