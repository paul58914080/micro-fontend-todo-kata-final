import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {CreateTodoService} from './create-todo.service';

@Component({
  selector: 'create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CreateTodoComponent implements OnInit {
  todo: string;

  @Output() created = new EventEmitter<void>();

  constructor(private createTodoService: CreateTodoService) {
  }

  ngOnInit() {
    this.todo = '';
  }

  onSubmit() {
    this.createTodoService.create({completed: false, title: this.todo}).subscribe(() => {
      this.created.emit();
      this.todo = '';
    }, () => {
      this.todo = '';
    });
  }
}
