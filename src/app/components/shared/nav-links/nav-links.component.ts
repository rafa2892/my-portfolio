import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.scss'
})
export class NavLinksComponent {

  constructor(
    private viewportScroller: ViewportScroller,
    private translate: TranslateService
  ) {
        this.loadNavItems();
    }

  protected  navItems: string[] = ['About', 'Skill Set', 'Projects', 'Contacts'];

  private loadNavItems(): void {
    this.navItems = [
      this.translate.instant('NAV.ABOUT'),
      this.translate.instant('NAV.SKILL_SET'),
      this.translate.instant('NAV.PROJECTS'),
      this.translate.instant('NAV.CONTACTS'),
    ];
  }

  scrollTo(section: string) {
    let elementId = section.toLowerCase().replace('nav.','').replace('_', '-');
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
