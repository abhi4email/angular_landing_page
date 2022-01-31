import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  title:string ="Subscribe";
  subTitle:string ="Subscribe to our Newsletter";
  subTitlep:string ="It will be as simple as occidental in fact, it will be Occidental.";
  constructor() { }

  ngOnInit(): void {
  }

}
