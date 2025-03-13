import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AboutComponent} from "./components/about/about.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {ContactComponent} from "./components/contact/contact.component";
import {FooterComponent} from "./components/footer/footer.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    ProfileComponent, 
    AboutComponent, 
    ExperienceComponent, 
    ProjectsComponent, 
    ContactComponent, 
    FooterComponent, 
    TranslateModule, 
    HttpClientModule],
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'en'; 
    this.translate.setDefaultLang('en'); 
    this.translate.use(savedLang); 
  }
  title = 'mi-portfolio';
}
