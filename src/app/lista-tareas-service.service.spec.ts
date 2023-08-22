import { TestBed } from '@angular/core/testing';

import { ListaTareasServiceService } from './lista-tareas-service.service';

describe('ListaTareasServiceService', () => {
  let service: ListaTareasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaTareasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
