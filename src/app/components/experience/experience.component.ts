import {Component} from '@angular/core';
import {ExperienceItemComponent} from "./experience-item/experience-item.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    ExperienceItemComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  protected backendExperienceItems: {key: string, value: string}[] = [
    {key: "Java", value: "Experienced"},
    {key: "Spring Boot", value: "Experienced"},
    {key: "Kafka", value: "Experienced"},
    {key: "MySQL", value: "Experienced"},
    {key: "PostgreSQL", value: "Experienced"},
    {key: "Kubernetes", value: "Intermediate"}
  ];

  protected frontendExperienceItems: {key: string, value: string}[] = [
    {key: "Angular", value: "Intermediate"},
    {key: "Typescript", value: "Intermediate"},
    {key: "HTML", value: "Intermediate"},
    {key: "CSS", value: "Intermediate"},
    {key: "React", value: "Basic"},
  ];

}
