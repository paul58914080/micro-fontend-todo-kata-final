import { TestBed } from '@angular/core/testing';

import { CreateTodoService } from './create-todo.service';

describe('CreateTodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateTodoService = TestBed.get(CreateTodoService);
    expect(service).toBeTruthy();
  });
});
