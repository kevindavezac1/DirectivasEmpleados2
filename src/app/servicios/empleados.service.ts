import { Injectable } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  //el tipo de dato es el servicio que vamos a importar(ServicioEmpleadosService)
  constructor(private servicioVentanEmergente : ServicioEmpleadosService) { 

  }

  empleados:Empleado[]=[
    new Empleado("Juan","Davezac","presidente",120000),
    new Empleado("Pedo","Ramirez","gerente",100000),
    new Empleado("Carlos","Claus","Analista",89000),
    new Empleado("Luis","Sanches","obrero",20000),  

  ];
  //en este servicio vamos a recibir el otro
  agregarEmpleadoServicio(empleado:Empleado){
    
  this.servicioVentanEmergente.muestraMensaje("Persona que se va a agregar: "+ "\n" +
     empleado.nombre +"\n"+
     "Salario: " + empleado.salario);
    this.empleados.push(empleado)
  }
}
