import { Component, Input } from '@angular/core';
import { Proyect } from '../../models/proyect';
import { ProyectsComponent } from '../proyects/proyects.component';

@Component({
  selector: 'div [app-proyecto]',
  standalone: true,
  imports: [ProyectsComponent],
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {

  @Input() proyect!: Proyect;

  confirmProyectGithub(): void {
    window.location.href = this.proyect.github;
  }

}
