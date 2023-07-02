import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IngresoInicioComponent } from "./ingreso-inicio.component";

const routes: Routes = [{path:'', component:IngresoInicioComponent}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IngresoInicioRoutingModule {}