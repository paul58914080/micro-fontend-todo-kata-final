import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';
import {environment} from '../environments/environment';
import {CreateTodoComponent} from './create-todo.component';
import {CreateTodoService} from './create-todo.service';

@NgModule({
  declarations: [CreateTodoComponent],
  providers: [CreateTodoService],
  exports: [CreateTodoComponent],
  imports: [CommonModule, BrowserModule, FormsModule, HttpClientModule],
  entryComponents: [CreateTodoComponent],
  bootstrap: environment.loadBootstrap ? [CreateTodoComponent] : [],
})
export class CreateTodoModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const createTodoElement = createCustomElement(CreateTodoComponent, {injector: this.injector});
    customElements.define('create-todo-element', createTodoElement);
  }
}
