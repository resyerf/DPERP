import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'cl-ad-iaconsultamapa', loadChildren: () => import('./modules/ingreso-inicio/ingreso-inicio.module').then(m => m.IngresoInicioModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
