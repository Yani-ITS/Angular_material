import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { ProductosComponent } from './componente/productos/productos.component';
import { ServiciosComponent } from './componente/servicios/servicios.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'productos',component:ProductosComponent},
  {path:'servicios',component:ServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
