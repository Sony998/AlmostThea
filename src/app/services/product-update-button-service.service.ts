import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductUpdateButtonService {
  private buttonInfo = { genre: 0 };
  private buttonClick$ = new Subject<void>();

  constructor() {}

  setButtonInfo(info: { genre: number }) {
    this.buttonInfo = info;
    this.buttonClick$.next(); // Emitir evento de clic en los botones
  }

  getButtonInfo() {
    return this.buttonInfo;
  }

  getButtonClick$() {
    return this.buttonClick$.asObservable();
  }
}