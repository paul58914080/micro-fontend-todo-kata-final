import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class CreateTodoService {

  constructor(private httpClient: HttpClient) {
  }

  create(todo: Todo): Observable<any> {
    return this.httpClient.post('/todo', todo);
  }
}
