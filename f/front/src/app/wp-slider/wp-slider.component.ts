import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

interface Slide {
  src: string;
}

@Component({
  selector: 'app-wp-slider',
  templateUrl: './wp-slider.component.html',
  styleUrls: ['./wp-slider.component.scss']
})
export class WpSliderComponent implements OnInit{
  slides = [
    { src: 'assets/slider1.jpg', alt: 'slider1' },
    { src: 'assets/slider2.webp', alt: 'slider2' },
    { src: 'assets/slider3.jpg', alt: 'slider3' }
  ];
  currentSlide = 0;

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? (this.slides.length - 1) : (this.currentSlide - 1);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide === this.slides.length - 1) ? 0 : (this.currentSlide + 1);
  }

  ngOnInit(): void {
  }

}
