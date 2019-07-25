import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';
import { CreateTodoComponent } from './create-todo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateTodoService } from './create-todo.service';

describe('CreateTodoComponent', () => {
  let component: CreateTodoComponent;
  let fixture: ComponentFixture<CreateTodoComponent>;
  let todoCreateService: CreateTodoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTodoComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTodoComponent);
    component = fixture.componentInstance;
    todoCreateService = fixture.debugElement.injector.get(CreateTodoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty text for todo on init', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.todo).toBe('');
  });

  it('should be able to create a todo', () => {
    spyOn(component, 'onSubmit').and.callThrough();
    const inputEl = fixture.debugElement.query(By.css('input[name=todo]'));
    inputEl.nativeElement.value = 'Watch Game of Thrones';
    const formEl = fixture.debugElement.query(By.css('form'));
    formEl.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should be able to create a todo on submit', () => {
    spyOn(component.created, 'emit').and.callThrough();
    spyOn(todoCreateService, 'create').and.returnValue(of({}));
    component.todo = 'Watch Game of Thrones';
    component.onSubmit();
    fixture.detectChanges();
    expect(todoCreateService.create).toHaveBeenCalledWith({completed: false, title: 'Watch Game of Thrones'});
    expect(component.todo).toEqual('');
    expect(component.created.emit).toHaveBeenCalled();
  });

  it('should not create a todo when the service has errors', () => {
    spyOn(component.created, 'emit').and.callThrough();
    spyOn(todoCreateService, 'create').and.returnValue(throwError(new Error('unable to handle')));
    component.todo = 'Watch Game of Thrones';
    component.onSubmit();
    fixture.detectChanges();
    expect(todoCreateService.create).toHaveBeenCalledWith({completed: false, title: 'Watch Game of Thrones'});
    expect(component.todo).toEqual('');
    expect(component.created.emit).not.toHaveBeenCalled();
  });
});
