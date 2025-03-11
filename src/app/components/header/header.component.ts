import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavLinksComponent} from "../shared/nav-links/nav-links.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavLinksComponent,
    TranslateModule, 
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  selectedLanguage : string | undefined;
  currentLang : string = ''; 

  constructor(private translate: TranslateService) {}

  ngAfterViewInit(): void {
    this.checkActiveLang();
  }
 
  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.checkActiveLang();
  }
  
  currentLanguage() {
    const language = localStorage.getItem('lang');
  }

  checkActiveLang() {
    const lang = localStorage.getItem('lang');
    if(lang) {
      this.currentLang = lang;
    }
    else {this.currentLang = 'en';}
  }


}
