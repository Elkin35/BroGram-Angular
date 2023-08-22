import { Component } from '@angular/core';
import { ListaTareasServiceService } from '../lista-tareas-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private listaService:ListaTareasServiceService) {

  }

  ngOnInit() {
    this.tareasNuevas = this.listaService.getTareasNuevas();
    this.tareasCompletadas = this.listaService.getTareasCompletadas();
  }

  // tareasNuevas: string[] = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
  // tareasCompletadas: string[] = ['Tarea completada 4', 'Tarea completada 5', 'Tarea completada 6'];

  tareasNuevas: string[] = [];
  tarea:string="";
  tareasCompletadas: string[] = [];
  tareaNueva:string="";

  agregarTarea(tareaNueva:string): void {
    if(tareaNueva.replace(/\s/g, "") != ""){
      this.listaService.addTareaNueva(tareaNueva);
      this.tareasNuevas = this.listaService.getTareasNuevas();
      this.tareaNueva="";
    }
  }

}
