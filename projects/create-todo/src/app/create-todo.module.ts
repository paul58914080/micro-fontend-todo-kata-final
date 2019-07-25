import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateTodoComponent} from './create-todo.component';
import {BrowserModule} from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [ CreateTodoComponent ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  entryComponents: [ CreateTodoComponent ],
  bootstrap: environment.loadBootstrap? [ CreateTodoComponent ] : [],
  exports: [ CreateTodoComponent ]
})
export class CreateTodoModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const createTodoElement = createCustomElement(CreateTodoComponent, { injector: this.injector });
    customElements.define('create-todo-element', createTodoElement);
  }
}
