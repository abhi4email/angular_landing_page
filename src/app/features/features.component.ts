import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  title:string ="Features";
  subTitle:string ="Key features of the product";
  subTitlep:string ="It will be as simple as occidental in fact, it will be Occidental.";
  constructor() { }

  ngOnInit(): void {
  }

}
