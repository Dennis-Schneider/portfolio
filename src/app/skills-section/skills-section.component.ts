import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
})
export class SkillsSectionComponent implements OnInit {
  // Set a flag to track whether the skills should be animated
  showArrow = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  // HostListener to track the scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Calculate the distance from the top of the document to the arrow element
    const arrowElement = this.el.nativeElement.querySelector('.arrow-ml');
    const elementPosition = arrowElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the arrow element is visible in the viewport
    if (elementPosition - windowHeight + 300 <= 0) {
      this.showArrow = true;
    } else {
      this.showArrow = false;
    }
  }
}
