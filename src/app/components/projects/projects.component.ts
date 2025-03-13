import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";
import { TranslateModule } from '@ngx-translate/core';

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
  ischeckable:boolean;
  appUrl:string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass,
    TranslateModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projects: Project[]  = [
    {
      name: 'SEPE',
      description: 'PROJECTS_DESC.SEPE_DESC',
      technologies: ['Java 8', 'JSF', 'Spring Framework', 'HTML', 'CSS', 'Bootstrap', 'JPA', 'IBM WebSphere'],
      src: './assets/projects/SEPE.jpg',
      link: '',
      ischeckable: false,
      appUrl:'',
    },
    {
      name: 'Madrid digital',
      description: 'PROJECTS_DESC.MADRID_DIGITAL_DESC',
      technologies: ['Java 8', 'Spring Boot', 'Spring Batch', 'Angular', 'TypeScript', 'Oracle Data base', 'Postman'],
      src: './assets/projects/madrid-digital.png',
      link: '',
      ischeckable: false,
      appUrl:'',
    },
    {
      name: 'Transport Bus app',
      description: 'PROJECTS_DESC.TRANSPORT_BUS_DESC',
      technologies: ["Java 17", "Spring boot", 'Angular', 'TypeScript','Bootstrap 5', 'JWT', 'Google API places', 'MySQL'],
      src: './assets/projects/bus_app_img.png',
      link: 'https://github.com/rafa2892/bus-app-front-deploy-version',
      ischeckable: true,
      appUrl:'https://bus-app-front-6b508bec4929.herokuapp.com',
    },
    {
      name: 'My Portfolio',
      description: 'Feel free to check out the code for my portfolio on Github. It\'s open for exploration, and you\'re welcome to fork it and create your own version!',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap'],
      src: './assets/projects/portfolio.jpg',
      link: 'https://github.com/SebastianoFazzino/my-portfolio',
      ischeckable: true,
      appUrl:'https://mi-portfolio-3492a933c6d9.herokuapp.com',
    },
    {
      name: 'Approved Multi-threading Technician Test',
      description: 'PROJECTS_DESC.MULTICORE_DESC',
      technologies: ['Java 17','Java', 'Spring Boot', 'Postman'],
      src: './assets/projects/multi_core.png',
      link: 'https://github.com/SebastianoFazzino/banking-app',
      ischeckable: false,
      appUrl:'',
    },
  ];
}
