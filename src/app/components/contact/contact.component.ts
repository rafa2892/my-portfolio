import { Component } from '@angular/core';
import {ExperienceItemComponent} from "../experience/experience-item/experience-item.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ExperienceItemComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/sebastiano-fazzino-895862176/', '_blank');
  }
}
