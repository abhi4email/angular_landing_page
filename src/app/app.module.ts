import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { Demo1Component } from './demo1/demo1.component';
import { DemoFooterComponent } from './demo-footer/demo-footer.component';
import { ClientCarouselComponent } from './client-carousel/client-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Demo2Component } from './demo2/demo2.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HomeFooterComponent,
    Demo1Component,
    DemoFooterComponent,
    ClientCarouselComponent,
    Demo2Component,
    ServicesComponent,
    FeaturesComponent,
    ClientsComponent,
    PricingComponent,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
