import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [],
  templateUrl: './project-item.component.html',
  styleUrl: '../projects.component.scss'
})
export class ProjectItemComponent {

  @Input({required: true}) project!: {
    name: string,
    description: string,
    technologies: string[],
    icon: string,
    link: string | null
  };
}
