import { Component } from '@angular/core';
import { EventService } from '../../../services/event.service'

@Component({
  selector: 'app-gen-buttons',
  templateUrl: './genbuttons.component.html',
  styleUrls: ['./genbuttons.component.scss']
})
export class GenButtonsComponent {
  constructor(private eventService: EventService) {}

  filtrarPorGenero(genero: number) {
    this.eventService.emit('filtrarPorGenero', genero);
  }

  mostrarTodosLosProductos() {
    this.eventService.emit('mostrarTodosLosProductos');
  }
}
