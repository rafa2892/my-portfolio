import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { PortfolioServiceService } from '../services/portfolio-service.service';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    TranslateModule, 
    HttpClientModule,
    CommonModule
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

  downloadResume(language: 'es' | 'en'): void {
    const fileName = language === 'es' ? 'cv-2025_es.docx' : 'cv-2025_en.docx';
    const fileUrl = `assets/cv/${fileName}`;
    const link = document.createElement('a');
    link.href = fileUrl;  
    link.download = fileName;
    link.click();  
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

  showDownloadOptions = false;

toggleDownloadOptions(): void {
  this.showDownloadOptions = !this.showDownloadOptions;
}

}
