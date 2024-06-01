import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  protected  navItems: string[] = ['About', 'Experience', 'Projects', 'Contacts'];

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

}
