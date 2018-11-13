//Agregamos input para poder settear/configurar propiedades, en este caso viene de otro componente.
import { Component, OnInit, Input } from "@angular/core";
import { Hero } from "../hero";
/*Previously, the parent HeroesComponent set the HeroDetailComponent.hero property and the 
HeroDetailComponent displayed the hero.
The HeroDetailComponent needs a new way to obtain the hero-to-display.*/
/*5) Pasos a seguir para la obtención del heroe en cuestión que queremos visualizar en este componente:
a)_Get the route that created it
b)_Extract the id from the route
c)_Acquire the hero with that id from the server via the HeroService
*/
//Imports necesarios para extraer el id del ruteo.
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { HeroService } from "../hero.service";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
//This component simply receives a hero object through its hero property and displays it.
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero; //Esto lo va a configurar cuando traigamos data de otro componente.
  //5) Injectamos los imports necesarios para poder obtener el heroe.
  constructor(
    private route: ActivatedRoute, //Con esto obtenemos el parametro que viaja con el ruteo.
    private heroService: HeroService, //Necesario para obtener al heroe usando el id.
    private location: Location //Servicio de Angular para interactuar con el navegador.
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id: number = +this.route.snapshot.paramMap.get("id");
    //The route.snapshot is a static image of the route information
    //The paramMap is a dictionary of route parameter values extracted from the URL
    //Route parameters are always strings. The JavaScript (+) operator converts the string to a number
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }

  goBack(): void {
    this.location.back(); //Usamos el stack de historial para poder navegar a la locación pasada usando el servicio injectado.
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
}
