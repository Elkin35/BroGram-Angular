import { Component, Input } from '@angular/core';
import { ListaTareasServiceService } from '../lista-tareas-service.service';

@Component({
  selector: 'app-tarea-nueva',
  templateUrl: './tarea-nueva.component.html',
  styleUrls: ['./tarea-nueva.component.css']
})
export class TareaNuevaComponent {

  @Input() tarea:string="";
  @Input() indice:number=0;
  tareasNuevas: string[] = [];

  constructor(private listaService:ListaTareasServiceService) {

  }

  ngOnInit() {
    this.tareasNuevas = this.listaService.getTareasNuevas();
    console.log(this.indice);
  }

  addTarea() {
    
    let tareaNueva:string = this.tareasNuevas[this.indice];
    this.listaService.addTareaCompletada(tareaNueva);
    this.listaService.deleteTareaNueva(this.indice);

    this.tareasNuevas = this.listaService.getTareasNuevas();
  }
  
}
