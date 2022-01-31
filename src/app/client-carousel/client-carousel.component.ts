import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-client-carousel',
  templateUrl: './client-carousel.component.html',
  styleUrls: ['./client-carousel.component.css']
})
export class ClientCarouselComponent implements OnInit {
  constructor() { }
  testimonialList: Array<any> =[
    {
    testiContent:'To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is languages are members',
    avtaImg:'../../assets/images/c-1.jpg',
    avtarName:'Jon Chon',
    relation:'PenStdio User',
    rating:'fa fa-star',
    },
    {
      testiContent:'To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is languages are members',
      avtaImg:'../../assets/images/c-2.jpg',
      avtarName:'Emma',
      relation:'PenStdio User',
      rating:'fa fa-star',
      },
      {
        testiContent:'To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is languages are members',
        avtaImg:'../../assets/images/c-3.jpg',
        avtarName:'Oliver',
        relation:'PenStdio User',
        rating:'fa fa-star',
        },
        {
          testiContent:'To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is languages are members',
          avtaImg:'../../assets/images/c-4.jpg',
          avtarName:'Ava',
          relation:'PenStdio User',
          rating:'fa fa-star',
          },
    
  ]

  ngOnInit(): void {
  }
  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoWidth:true,
    mergeFit:true,
    margin:40,
    stagePadding:30,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
     '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    
  }
}
