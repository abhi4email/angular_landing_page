import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

 
  navbarfixed:boolean= false;
  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY >10){
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }
  ngOnInit(): void {
  }
}
