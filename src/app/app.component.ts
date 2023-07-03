import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Thea';

  stateToggle = false;
  stateOfmenu(navState: any) {
    this.stateToggle = navState;
  }

}
