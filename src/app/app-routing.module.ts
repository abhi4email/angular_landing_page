import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'demo1', component: Demo1Component},
  {path: 'demo2', component: Demo2Component},
  {path: 'demo3', component: Demo3Component},
  {path: 'demo4', component: Demo4Component},
  {path: 'demo5', component: Demo5Component},
  {path: 'demo6', component: Demo6Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
