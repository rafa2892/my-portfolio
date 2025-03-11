import {Component} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  getExperienceYears(): number {
    const startDate = new Date(2021, 3); // April 2021
    const currentDate = new Date();
    const years = currentDate.getFullYear() - startDate.getFullYear();
    const m = currentDate.getMonth() - startDate.getMonth();
    return m < 0 || (m === 0 && currentDate.getDate() < startDate.getDate()) ? years - 1 : years;
  }

}
