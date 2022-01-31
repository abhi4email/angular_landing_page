import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  title:string ="Testimonial";
  subTitle:string ="What our Client Say";
  subTitlep:string ="It will be as simple as occidental in fact, it will be Occidental.";
  subTitle2:string ="Best Solutions for your Business";
  subTitlep2:string ="To achieve this, it would be necessary to have uniform grammar, pronunciation and more common that of the individual languages.";
  brandImg: Array<any> =[
    {
      brandImg:'../../assets/images/demo/1.png',
    },
    {
      brandImg:'../../assets/images/demo/3.png',
    },
    {
      brandImg:'../../assets/images/demo/4.png',
    },
    {
      brandImg:'../../assets/images/demo/6.png',
    }

  ]

  businessSolution: Array<any> = [
    {
      icon:'fa fa-bookmark fa-2x  mb-3',
      count:'2581',
      subLabels:'Projects',
    },
    {
      icon:'fa fa-user-plus fa-2x  mb-3',
      count:'800',
      subLabels:'No. of Client',
    },
    {
      icon:'fa fa-coffee fa-2x  mb-3',
      count:'128',
      subLabels:'Cups of coffee',
    },
    {
      icon:'fa fa-trophy fa-2x  mb-3',
      count:'47',
      subLabels:'Awards',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
