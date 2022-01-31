import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  imgUrl: String ='../../assets/images/demo/banner-img1.png'
  constructor() { }

  ngOnInit(): void {
  }

}
