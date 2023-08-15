import { Component, HostListener, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss'],
})
export class PortfolioSectionComponent implements OnInit {
  // Set a flag to track whether the arrow should appear
  showArrow = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  // HostListener to track the scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Calculate the distance from the top of the document to the arrow element
    const arrowElement = this.el.nativeElement.querySelector('.arrow-m');
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
