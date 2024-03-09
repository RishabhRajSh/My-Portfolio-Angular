import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})
export class ImageBoxComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => this.handleIntersection(entries));
    observer.observe(this.container.nativeElement);
  }

  handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }
}
