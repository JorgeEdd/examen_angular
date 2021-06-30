import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './page/empleados/empleados.component';
import { FormularioComponent } from './page/formulario/formulario.component';
import { HomeComponent } from './page/home/home.component';
import { TableComponent } from './page/table/table.component';


const routes: Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: 'empleados', component: EmpleadosComponent},
  { path: '', redirectTo: '/formulario', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
