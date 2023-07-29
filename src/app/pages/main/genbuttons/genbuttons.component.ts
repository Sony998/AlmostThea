import { Component } from '@angular/core';
import { ProductUpdateButtonService } from 'src/app/services/product-update-button-service.service';
@Component({
  selector: 'app-gen-buttons',
  templateUrl: './genbuttons.component.html',
  styleUrls: ['./genbuttons.component.scss']
})
export class GenButtonsComponent {
  constructor(private buttonInfoService: ProductUpdateButtonService) {}

  filterByGenre(genre: number) {
    this.buttonInfoService.setButtonInfo({ genre: genre });
  }

  
}