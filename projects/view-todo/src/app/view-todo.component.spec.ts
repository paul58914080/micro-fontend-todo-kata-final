import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTodoComponent } from './view-todo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewTodoComponent', () => {
  let component: ViewTodoComponent;
  let fixture: ComponentFixture<ViewTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTodoComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
