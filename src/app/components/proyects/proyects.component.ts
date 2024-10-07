import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Proyect } from '../../models/proyect';
import { ProyectoComponent } from '../proyecto/proyecto.component';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [
    ProyectoComponent,
  ],
  templateUrl: './proyects.component.html',
})
export class ProyectsComponent {

  @Input() proyects!: Proyect[];

}
