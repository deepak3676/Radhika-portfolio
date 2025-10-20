import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule for ngFor/ngIf
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules'; // ✅ Import from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css';
import 'swiper/css/pagination';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule here
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  slides = [
    { src: '/assets/img/Snap circuit.jpeg', caption: 'Snap Circuit' },
    { src: '/assets/img/Arduino.jpeg', caption: 'Arduino & ESP32' },
    { src: '/assets/img/Design thinking.jpeg', caption: 'Design Thinking' },
    { src: '/assets/img/Aeromodelling.jpeg', caption: 'Aeromodelling' },
  ];

  ngAfterViewInit() {
    // Only run Swiper in the browser
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      import('swiper').then(({ default: Swiper }) => {
        Swiper.use([Pagination, Autoplay]);

        new Swiper('.mySwiper', {
          slidesPerView: 1,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          centeredSlides: true,
        });
      });
    }
  }

}
