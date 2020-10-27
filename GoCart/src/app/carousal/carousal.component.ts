import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  useAnimation,
} from '@angular/animations';
import { fadeIn, fadeOut, scaleIn, scaleOut } from '../animations/animations';
@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      /* scale */
      transition('void => *', [
        useAnimation(scaleIn, { params: { time: '700ms' } }),
      ]),
      transition('* => void', [
        useAnimation(scaleOut, { params: { time: '700ms' } }),
      ]),
    ]),
  ],
})
export class CarousalComponent implements OnInit {
  @Input() slides;
  currentSlide = 0;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showSlides();
    }, 5000);
  }
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;

    console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;

    console.log('next clicked, new current slide is: ', this.currentSlide);
  }
  showSlides() {
    if (this.currentSlide >= 3) {
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }
    setTimeout(() => {
      this.showSlides();
    }, 5000);
  }
}
