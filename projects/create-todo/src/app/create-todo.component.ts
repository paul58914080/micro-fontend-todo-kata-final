import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CreateTodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
