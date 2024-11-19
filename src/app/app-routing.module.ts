import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponetComponent } from './proyectos-componet/proyectos-componet.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';

const routes: Routes = [
  {path:"",component:HomeComponentComponent},
  {path:"proyectos",component:ProyectosComponetComponent},
  {path:"quienes",component:QuienesComponentComponent},
  {path:"contacto",component:ContactoComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
