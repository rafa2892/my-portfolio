import {Component, Input} from '@angular/core';
import {Project} from "../projects.component";
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './project-item.component.html',
  styleUrl: '../projects.component.scss'
})
export class ProjectItemComponent {

  @Input({required: true}) project!: Project;
}
