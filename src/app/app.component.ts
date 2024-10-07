import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PorfolioComponent } from "./components/porfolio/porfolio.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PorfolioComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
