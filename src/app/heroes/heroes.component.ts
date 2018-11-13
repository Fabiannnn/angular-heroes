import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
//4) import { HEROES } from '../mock-heroes'; //Usamos el service.
import { HeroService } from "../hero.service";
//@Component es un decorator para el componente creado.
//app-heroes es el selector para el componente HeroesComponent
//(basicamente es un componente hijo, utilizable desde el componente padre desde la plantilla html).

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
//2) Generamos un componente nuevo 'ng generate component heroes' (se crea en el app).
export class HeroesComponent implements OnInit {
  //2) Creamos propiedad hero.
  /*
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  */
  heroes: Hero[]; //4) = HEROES; //Vamos a usar el service.
  //3) Para el event binding.
  //5) No es necesario porque usamos ruteo para los detalles del heroe selectedHero: Hero;

  //2) hero: string = 'Windstorm' //Creamos una propiedad 'hero'.

  constructor(private heroService: HeroService) {} //Injectamos el servicio al componente.
  //No hacer nada en el constructor, solo debería hacer simples inicializaciones (ej: mapear
  //los parametros del constructor a las propiedades del componente)

  ngOnInit(): void {
    /*
    Inicializa el componente después de que angular visualiza las propiedades con data y la directiva de input.
    Lo llama una vez, luego del primer ngOnChanges().
    */
    this.getHeroes();
    //Observable data: getHeroes() es un metodo SINCRóNICO, trae heroes sincronicamente.
    //En realidad, el componente consume el resultado del metodo getHeroes() como si pudiese traerse a los heroes de forma sincrónica.
  }
  /* 5) No es mas necesario porque usamos ruteo para los detalles del heroe.
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  */
  /* Llamada al servicio que retornaba el mock de heroes.
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  */
  /* Este método retorn un Observable de Hero. IMPORTANTE: La misma utiliza suscribe (ver README). */
  getHeroes(): void {
    //Esperamos a que el Observable emita la lista de heroes luego el suscribe pasa dicho array
    //al que lo haya llamado, la cual setea la propiedad 'heroes' del componente.
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
