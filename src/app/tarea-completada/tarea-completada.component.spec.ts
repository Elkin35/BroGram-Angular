import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaCompletadaComponent } from './tarea-completada.component';

describe('TareaCompletadaComponent', () => {
  let component: TareaCompletadaComponent;
  let fixture: ComponentFixture<TareaCompletadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareaCompletadaComponent]
    });
    fixture = TestBed.createComponent(TareaCompletadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
