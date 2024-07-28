import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  imports: [
    NgForOf
  ],
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit {

  private backendExperienceItems: { key: string, value: string }[] = [
    {key: "Java", value: "Experienced"},
    {key: "Spring Boot", value: "Experienced"},
    {key: "Kafka", value: "Experienced"},
    {key: "MySQL", value: "Experienced"},
    {key: "PostgreSQL", value: "Experienced"},
    {key: "Kubernetes", value: "Intermediate"},
    {key: "GIT", value: "Experienced"},
  ];

  private frontendExperienceItems: { key: string, value: string }[] = [
    {key: "Angular", value: "Intermediate"},
    {key: "React", value: "Basic"},
    {key: "Next.js", value: "Basic"},
    {key: "Javascript", value: "Intermediate"},
    {key: "Typescript", value: "Intermediate"},
    {key: "HTML", value: "Intermediate"},
    {key: "CSS", value: "Intermediate"},
    {key: "Bootstrap", value: "Intermediate"},
  ];

  get backendExperience(): { key: string, value: string }[] {
    return this.backendExperienceItems
      .concat(this.backendExperienceItems)
      .concat(this.backendExperienceItems)
      .concat(this.backendExperienceItems)
      .concat(this.backendExperienceItems)
      .concat(this.backendExperienceItems);
  }

  public infiniteList: {key: string, value: string}[] = [...this.frontendExperienceItems];
  public currentIndex: number = 0;

  @ViewChildren('carouselItem', { read: ElementRef }) carouselItems!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.carouselItems.changes.subscribe(() => {
      this.updateVisibleItems();
    });
    this.updateVisibleItems();
  }

  private updateVisibleItems(): void {
    this.carouselItems.forEach((item, index) => {
      if (this.isElementInViewport(item.nativeElement)) {
        this.currentIndex = index;
        this.checkAndExtendList();
      }
    });
  }

  private isElementInViewport(el: any): boolean {
    const rect = el.getBoundingClientRect();
    return rect.left >= 0 && rect.right <=
      (window.innerWidth || document.documentElement.clientWidth);
  }

  private checkAndExtendList(): void {
    const threshold = Math.floor(this.infiniteList.length * 0.90);
    if (this.currentIndex >= threshold) {
      this.infiniteList = [...this.infiniteList, ...this.frontendExperienceItems];
    }
  }

  // Unique key for tracking by Angular
  trackByFn(index: number, item: { key: string, value: string }): string {
    return item.key;
  }
}
