import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoInicioComponent } from './ingreso-inicio.component';
import { IngresoInicioRoutingModule } from './ingreso-inicio-routing.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    IngresoInicioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    IngresoInicioRoutingModule
  ]
})
export class IngresoInicioModule { }
