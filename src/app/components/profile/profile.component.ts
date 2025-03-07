import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";
import { PortfolioServiceService } from '../services/portfolio-service.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private viewportScroller: ViewportScroller,
              private portService : PortfolioServiceService) {}

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  openResume() {
    window.open("./assets/SebastianoFazzino.pdf");
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/sebastiano-fazzino-895862176/', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/SebastianoFazzino', '_blank');
  }

  prueba() {
    this.portService.pruebaConexion().subscribe({
      next: () => console.log('Conexión exitosa'),
      error: (error) => console.error('Error en la conexión:', error)
    });
  }
  
}
