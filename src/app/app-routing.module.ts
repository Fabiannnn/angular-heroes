import { NgModule } from "@angular/core";
//import { CommonModule } from '@angular/common'; 5) No es necesario ya que por lo general no declaras componentes en el routing.
import { RouterModule, Routes } from "@angular/router"; //Importante para poder usarlo en los componentes del AppModule
import { HeroesComponent } from "./heroes/heroes.component"; //Lo importamos asi lo podemos referenciar desde este componente routing.
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
//Definimos un array de rutas, por el momento solo con el componente de heroes.
//Agregamos DashboardComponent para ruteo.
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //Con esto indicamos la ruta default de la app.
  { path: 'detail/:id', component: HeroDetailComponent }, //Esto es una ruta parametrizada.
  { path: "heroes", component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent }
]; //

@NgModule({
  /*
  declarations: [],
   Esto por lo general no lo necesitamos en un componente de routing.
  imports: [
    CommonModule
  ]*/
  imports: [RouterModule.forRoot(routes)], //Basicamente inicializa las directivas de ruteo a nivel root.
  exports: [RouterModule]
})
export class AppRoutingModule {}
