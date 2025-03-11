import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { PortfolioServiceService } from '../services/portfolio-service.service';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    TranslateModule, 
    HttpClientModule
    ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  constructor(
    private viewportScroller: ViewportScroller,
    private portService: PortfolioServiceService,
  ) {}

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = './assets/cv-2025.docx';  // Ruta del archivo .docx
    link.download = 'cv-2025.docx';  // Nombre del archivo cuando se descargue
    link.click();  // Simula el clic en el enlace
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/rafael-moreno-728aba179/', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/rafa2892', '_blank');
  }

  connectionBackTest() {
    this.portService.pruebaConexion().subscribe({
      next: () => console.log('Conexión exitosa'),
      error: (error) => console.error('Error en la conexión:', error)
    });
  }

}
