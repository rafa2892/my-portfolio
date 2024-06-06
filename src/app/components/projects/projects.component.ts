import {Component} from '@angular/core';
import {NgClass, NgForOf, ViewportScroller} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  openAccordionIndex: number | null = 0;

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  setAccordionIndex(index: number | null) {
    if (this.openAccordionIndex === index) {
      this.openAccordionIndex = null;
    } else {
      this.openAccordionIndex = index;
    }
  }

  protected projects: {name: string, description: string, technologies: string[], icon: string, link: string | null}[]  = [
    {
      name: 'My Portfolio',
      description: 'Feel free to check out the code for my portfolio on Github. It\'s open for exploration, and you\'re welcome to fork it and create your own version!',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      icon: 'fa fa-project-diagram icon',
      link: 'https://github.com/SebastianoFazzino/my-portfolio',
    },
    {
      name: 'Banking App Decision Engine',
      description: 'Ever wondered how banks decide on loan approvals? Dive into the code of this project, built with Angular, TypeScript, HTML, SCSS, Java, and Spring Boot, to see a simplified version of the process.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Java', 'Spring Boot'],
      icon: 'fa fa-building-columns icon',
      link: 'https://github.com/SebastianoFazzino/banking-app',
    },
    {
      name: 'Toolbox (work in progress)',
      description: 'Take a peek into my evolving toolbox! It\'s a collection of handy tools I\'m crafting with Angular. While it\'s a work in progress, I hope it sparks some ideas for your own projects!',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      icon: 'fa fa-screwdriver-wrench icon',
      link: null,
    }];
}
