import { Component, OnInit } from '@angular/core';
// import { register } from 'swiper/element/bundle';
// import SwiperCore from 'swiper';
import * as $ from "jquery";
declare const Swiper: any;



@Component({
  selector: 'app-home-blogs',
  templateUrl: './home-blogs.component.html',
  styleUrls: ['./home-blogs.component.scss']
})
export class HomeBlogsComponent implements OnInit {
  myBlogsDescription: string = `In my Blogs, I talk about everything related to the field of software
  engineering,
  including education, work, and development`;
  myBlogs: any[] = [
    { id: "dg6456465", title: "My Blog", image: "assets/images/microsoft_2.jfif", date: "2023 - 1 - 23" },
    { id: "dg6456465", title: "My Blog", image: "assets/images/microsoft_2.jfif", date: "2023 - 1 - 23" },
    { id: "dg6456465", title: "My Blog", image: "assets/images/microsoft_2.jfif", date: "2023 - 1 - 23" },
    { id: "dg6456465", title: "My Blog", image: "assets/images/microsoft_2.jfif", date: "2023 - 1 - 23" },
    { id: "dg6456465", title: "My Blog", image: "assets/images/microsoft_2.jfif", date: "2023 - 1 - 23" },
    { id: "dg6456465", title: "My Blog", image: "assets/images/microsoft_2.jfif", date: "2023 - 1 - 23" },
  ];

  constructor() { }

  ngOnInit(): void {
    //======================
    var offerSlide = new Swiper(".blog-slide", {
      slidesPerView: 1,
      spaceBetween: 1,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

}
