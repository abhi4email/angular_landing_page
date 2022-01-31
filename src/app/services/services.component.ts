import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  title:string ="SERVICES";
  subTitle:string ="Services We Provide";
  subTitlep:string ="It will be as simple as occidental in fact, it will be Occidental.";
  
  serviceItem: Array<any> = [
    {
      icon:'fa fa-laptop fa-2x',
      stitle:'Bootstrap UI based',
      sContent:'To an English person, it will seem like English as skeptical.'
    },
    {
      icon:'fa fa-pencil fa-2x',
      stitle:'Easy to customize',
      sContent:'If several languages coalesce, the grammar of the language.'
    },
    {
      icon:'fa fa-life-ring fa-2x',
      stitle :'Awesome Support ',
      sContent :'The languages only differ in their grammar their pronunciation'
    },
    {
      icon:'fa fa-newspaper-o fa-2x',
      stitle:'Creative Design',
      sContent :'Everyone realizes why a new common would be desirable.'
    },
    {
      icon:'fa fa-code fa-2x',
      stitle:'Quality Code',
      sContent:'To achieve this, it would be necessary to have uniform.'
    },
    {
      icon:'fa fa-tablet fa-2x',
      stitle:'Responsive layout',
      sContent:'Their separate existence is a myth. For science, music, etc.'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
