import { Component, Input } from '@angular/core';
import { ListaTareasServiceService } from '../lista-tareas-service.service';

@Component({
  selector: 'app-tarea-completada',
  templateUrl: './tarea-completada.component.html',
  styleUrls: ['./tarea-completada.component.css']
})
export class TareaCompletadaComponent {

  @Input() tarea:string="";
  @Input() indice:number=0;
  tareasCompletadas: string[] = [];

  constructor(private listaService:ListaTareasServiceService) {

  }

  ngOnInit() {
    this.tareasCompletadas = this.listaService.getTareasCompletadas();
  }

  addTarea() {
    let tareaNueva:string = this.tareasCompletadas[this.indice];
    this.listaService.addTareaNueva(tareaNueva);
    this.listaService.deleteTareaCompletada(this.indice);

    this.tareasCompletadas = this.listaService.getTareasCompletadas();
  }

}
