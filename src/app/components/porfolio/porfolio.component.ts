import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ProyectsComponent } from '../proyects/proyects.component';
import { Proyect } from '../../models/proyect';
import { ProyectService } from '../../services/proyect.service';
import { SkillsComponent } from '../skills/skills.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { ExperienciaComponent } from '../experiencia/experiencia.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-porfolio',
  standalone: true,
  imports: [NavbarComponent, 
    AboutMeComponent, 
    ProyectsComponent, 
    SkillsComponent, 
    ContactoComponent,
    ExperienciaComponent,
    FooterComponent
],
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css'] 
})
export class PorfolioComponent implements OnInit {

  proyects: Proyect[] = []

  constructor(private service: ProyectService) {

  }

  ngOnInit(): void {
    this.proyects = this.service.findAll();
  }
}
