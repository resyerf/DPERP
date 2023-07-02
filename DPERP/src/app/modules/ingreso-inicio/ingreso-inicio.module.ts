import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoInicioComponent } from './ingreso-inicio.component';
import { IngresoInicioRoutingModule } from './ingreso-inicio-routing.module';



@NgModule({
  declarations: [
    IngresoInicioComponent
  ],
  imports: [
    CommonModule,
    IngresoInicioRoutingModule
  ]
})
export class IngresoInicioModule { }
