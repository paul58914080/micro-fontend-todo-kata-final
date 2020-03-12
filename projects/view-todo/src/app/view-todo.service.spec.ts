import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Todo } from './todo';
import { ViewTodoService } from './view-todo.service';

describe('ViewTodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewTodoService = TestBed.inject(ViewTodoService);
    expect(service).toBeTruthy();
  });

  let todoViewService: ViewTodoService;
  let httpMock: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  beforeEach(() => {
    todoViewService = TestBed.inject(ViewTodoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(todoViewService).toBeTruthy();
  });

  it('should be able to get all the todo\'s', () => {
    const todos = [{completed: false, title: 'Watch Game of Thrones', id: 1}];
    todoViewService.getAllTodo().subscribe((res: Todo[]) => {
      expect(res).toBe(todos);
    });
    const req = httpMock.expectOne(`/todo`, 'call to api');
    expect(req.request.method).toBe('GET');
    req.flush(todos);
    httpMock.verify();
  });

  it('should be able to get all pending actionable todo\'s', () => {
    const todos = [{completed: false, title: 'Watch Game of Thrones', id: 1}];
    todoViewService.getPendingTodo().subscribe((res: Todo[]) => {
      expect(res).toBe(todos);
    });
    const req = httpMock.expectOne(`/todo?completed=false`, 'call to api for pending actions');
    expect(req.request.method).toBe('GET');
    req.flush(todos);
    httpMock.verify();
  });

  it('should be able to get all completed todo\'s', () => {
    const todos = [{completed: true, title: 'Watch Game of Thrones', id: 1}];
    todoViewService.getCompletedTodo().subscribe((res: Todo[]) => {
      expect(res).toBe(todos);
    });
    const req = httpMock.expectOne(`/todo?completed=true`, 'call to api for completed actions');
    expect(req.request.method).toBe('GET');
    req.flush(todos);
    httpMock.verify();
  });

  it('should be able to update the todo item', () => {
    const todo: Todo = {completed: true, title: 'Watch Game of Thrones', id: 1};
    todoViewService.update(todo).subscribe();
    const req = httpMock.expectOne(`/todo/1`, 'call to api for updating todo');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toBe(todo);
    req.flush({});
    httpMock.verify();
  });
});
