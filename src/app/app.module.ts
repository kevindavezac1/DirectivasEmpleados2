import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaractEmpleadoCComponent } from './caract-empleado-c/caract-empleado-c.component';
import { ServicioEmpleadosService } from './servicios/servicio-empleados.service';
import { EmpleadosService } from './servicios/empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponetComponent } from './proyectos-componet/proyectos-componet.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaractEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponetComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ServicioEmpleadosService,EmpleadosService],
  bootstrap: [AppComponent]

})


export class AppModule { }
