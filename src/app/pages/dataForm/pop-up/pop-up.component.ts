import { Component } from '@angular/core';
import { Location } from '@angular/common';
;
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
  
}
