import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from './todo';
import {ViewTodoService} from './view-todo.service';

@Component({
  selector: 'view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.scss']
})
export class ViewTodoComponent implements OnInit, OnDestroy {

  todos: Todo[];
  selectedAction: string;
  actions: string[];

  constructor(private viewService: ViewTodoService) {
  }

  ngOnInit() {
    this.actions = Object.values(Actions);
    this.selectedAction = Actions.Pending;
    this.getPendingTodo();
    // add listener to the create-todo-element
    const createTodoEl = document.querySelector('create-todo-element');
    if (createTodoEl) {
      createTodoEl.addEventListener('created', this.created);
    }
  }

  getPendingTodo() {
    this.viewService.getPendingTodo().subscribe((response) => {
      this.todos = response;
    });
  }

  getAllTodo() {
    this.viewService.getAllTodo().subscribe((response) => {
      this.todos = response;
    });
  }

  getCompletedTodo() {
    this.viewService.getCompletedTodo().subscribe((response) => {
      this.todos = response;
    });
  }

  actionChanged(selectedAction: string) {
    switch (selectedAction) {
      case Actions.All:
        this.selectedAction = Actions.All;
        this.getAllTodo();
        break;
      case Actions.Completed:
        this.selectedAction = Actions.Completed;
        this.getCompletedTodo();
        break;
      default:
        this.selectedAction = Actions.Pending;
        this.getPendingTodo();
    }
  }

  completed(todo: Todo) {
    this.viewService.update(todo).subscribe(() => {
      this.actionChanged(this.selectedAction);
    });
  }

  ngOnDestroy(): void {
    // remove listener of the create-todo-element
    const createTodoEl = document.querySelector('create-todo-element');
    if (createTodoEl) {
      createTodoEl.removeEventListener('created', this.created);
    }
  }

  created = () => {
    this.actionChanged(this.selectedAction);
  }
}

enum Actions {
  All = 'All',
  Completed = 'Completed',
  Pending = 'Pending'
}
