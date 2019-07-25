import { TestBed } from '@angular/core/testing';

import { ViewTodoService } from './view-todo.service';

describe('ViewTodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewTodoService = TestBed.get(ViewTodoService);
    expect(service).toBeTruthy();
  });
});
