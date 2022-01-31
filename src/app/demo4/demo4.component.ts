import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.css']
})
export class Demo4Component implements OnInit {

  constructor() { }
  imgUrl: String ='../../assets/images/demo/banner-img1.png'
  ngOnInit(): void {
  }

}
