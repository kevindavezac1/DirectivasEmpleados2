import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicios/servicio-empleados.service';
import { EmpleadosService } from '../servicios/empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit{
  titulo = 'Listado de empleados';

  constructor(private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadosService){

  }
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  empleados:Empleado[]=[ ]

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)
    // this.miServicio.muestraMensaje("Nombre del empleado: "+ miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado)
  }
}
