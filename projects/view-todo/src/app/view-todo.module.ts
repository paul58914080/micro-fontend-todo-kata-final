import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {createCustomElement} from '@angular/elements';
import {environment} from '../environments/environment';
import {ViewTodoComponent} from './view-todo.component';
import {ViewTodoService} from './view-todo.service';

@NgModule({
  declarations: [ViewTodoComponent],
  imports: [CommonModule, BrowserModule, HttpClientModule, NgbDropdownModule, FormsModule],
  providers: [ViewTodoService],
  entryComponents: [ViewTodoComponent],
  bootstrap: environment.loadBootstrap ? [ViewTodoComponent] : [],
  exports: [ViewTodoComponent]
})
export class ViewTodoModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const createTodoElement = createCustomElement(ViewTodoComponent, {injector: this.injector});
    customElements.define('view-todo-element', createTodoElement);
  }
}
