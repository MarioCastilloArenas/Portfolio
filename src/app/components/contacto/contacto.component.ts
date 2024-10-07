import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'] // Cambié 'styleUrl' a 'styleUrls' ya que 'styleUrls' es la propiedad correcta para una lista de estilos en Angular
})
export class ContactoComponent {

  confirmGithub(): void {
    window.location.href = "https://github.com/MarioCastilloArenas";
  }

  confirmLinkedin(): void {
    window.location.href = "https://www.linkedin.com/in/mario-castillo-arenas/";
  }

}
