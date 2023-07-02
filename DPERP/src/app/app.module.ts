import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoInicioModule } from './modules/ingreso-inicio/ingreso-inicio.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    IngresoInicioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
