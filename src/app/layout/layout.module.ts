import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [LayoutComponent],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LayoutModule {
}
