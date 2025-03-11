import {Component} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/rafael-moreno-728aba179/', '_blank');
  }

  get email(): string {
    return 'rafav2009@gmail.com';
  }
}
