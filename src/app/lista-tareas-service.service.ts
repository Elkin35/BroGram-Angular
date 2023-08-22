import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaTareasServiceService {

  constructor() { }

  tareasNuevas: string[] = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
  tareasCompletadas: string[] = ['Tarea completada 4', 'Tarea completada 5', 'Tarea completada 6'];

  getTareasNuevas(): string[] {
    return this.tareasNuevas;
  }

  getTareasCompletadas(): string[] {
    return this.tareasCompletadas;
  }

  addTareaNueva(tarea: string): void {
    this.tareasNuevas.push(tarea);
  }

  addTareaCompletada(tarea: string): void {
    this.tareasCompletadas.push(tarea);
  }

  deleteTareaNueva(indice: number): void {
    this.tareasNuevas.splice(indice, 1);
  }

  deleteTareaCompletada(indice: number): void {
    this.tareasCompletadas.splice(indice, 1);
  }


}
