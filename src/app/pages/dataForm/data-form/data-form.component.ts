import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
