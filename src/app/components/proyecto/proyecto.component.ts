import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { Proyect } from '../../models/proyect';
import { ProyectsComponent } from '../proyects/proyects.component';

@Component({
  selector: 'div [app-proyecto]',
  standalone: true,
  imports: [CommonModule, ProyectsComponent], // Añadir CommonModule aquí
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {

  @Input() proyect!: Proyect;

  confirmProyectGithub(): void {
    window.location.href = this.proyect.github;
  }

}
