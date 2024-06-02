import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: '../experience.component.scss'
})
export class ExperienceItemComponent {

  @Input({required: true}) item!: string;
  @Input({required: true}) level!: string;

}
