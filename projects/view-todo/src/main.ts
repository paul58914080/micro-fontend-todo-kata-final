import {enableProdMode, ViewEncapsulation} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from './environments/environment';
import {ViewTodoModule} from './app/view-todo.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ViewTodoModule, {
  defaultEncapsulation: ViewEncapsulation.ShadowDom
})
  .catch(err => console.error(err));
