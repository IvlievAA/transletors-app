import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {OrdertableComponent} from './components/ordertable/ordertable.component';
import {CompanytableComponent} from './components/companytable/companytable.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'orders', component: OrdertableComponent},
  {path: 'company', component: CompanytableComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
