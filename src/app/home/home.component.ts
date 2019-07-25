import {Component, OnInit, ViewChild} from '@angular/core';
import {ViewTodoComponent} from '../../../projects/view-todo/src/app/view-todo.component';

@Component({
  selector: 'todo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loadElement = false;
  @ViewChild(ViewTodoComponent, { static: false }) view: ViewTodoComponent;

  constructor() { }

  ngOnInit() {
    this.loadElement = false;
  }

  created() {
    this.view.actionChanged(this.view.selectedAction);
  }
}
