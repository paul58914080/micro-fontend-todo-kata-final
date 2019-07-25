import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {AppRoutingModule} from './routes/routes.module';
import {HomeModule} from '../home/home.module';

@NgModule({
  declarations: [ LayoutComponent ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule
  ]
})
export class LayoutModule { }
