import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CreateTodoModule} from '../../../projects/create-todo/src/app/create-todo.module';
import {ViewTodoModule} from '../../../projects/view-todo/src/app/view-todo.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CreateTodoModule,
    ViewTodoModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule {
}
