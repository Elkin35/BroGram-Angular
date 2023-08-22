import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaNuevaComponent } from './tarea-nueva.component';

describe('TareaNuevaComponent', () => {
  let component: TareaNuevaComponent;
  let fixture: ComponentFixture<TareaNuevaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareaNuevaComponent]
    });
    fixture = TestBed.createComponent(TareaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
