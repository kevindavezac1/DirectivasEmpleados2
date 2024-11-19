import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicios/servicio-empleados.service';

@Component({
  selector: 'app-caract-empleado-c',
  templateUrl: './caract-empleado-c.component.html',
  styleUrls: ['./caract-empleado-c.component.css']
})
export class CaractEmpleadoCComponent {
  

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  // constructor(private miServicio:ServicioEmpleadosService){}

  agregarCaracteristica(value:string){
    // this.miServicio.muestraMensaje("Se agregara una caracterstica")
    // this.caracteristicasEmpleados.emit(value);
  }

}
