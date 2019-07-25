import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class ViewTodoService {

  constructor(private httpClient: HttpClient) {
  }

  getAllTodo(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('/todo');
  }

  getPendingTodo(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('/todo?completed=false');
  }

  getCompletedTodo(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('/todo?completed=true');
  }

  update(todo: Todo): Observable<any> {
    return this.httpClient.put<void>(`/todo/${todo.id}`, todo);
  }
}
