import { Injectable } from "@angular/core";
import { Hero } from "./hero";
//import { HEROES } from "./mock-heroes"; //6) Ya no sirve ya que vamos a solicitarlo por HTTP
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http"; //Symbols que vamos a necesitar.
import { catchError, map, tap } from "rxjs/operators"; //6) Utilizamos para cachear errores al solicitar datos del servidor remoto.

//The heroes web API expects a special header in HTTP save requests.
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class HeroService {
  //Injectamos MessageService.
  /* This is a typical "service-in-service" scenario: you inject the MessageService into 
  the HeroService which is injected into the HeroesComponent.
  */
  //Define the heroesUrl of the form :base/:collectionName with the address of the heroes resource on the server.
  private heroesUrl = "api/heroes"; //6) URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /* Metodo cuando usabamos mock
  getHeroes(): Hero[] {
    return HEROES;
  }
  */

  /*GET heroes from RxJS of() function that return an array of mock heroes as an Observable<Hero[]>
  getHeroes(): Observable<Hero[]> {
    //Mandamos el mensaje luego de traer los heroes.
    this.messageService.add("HeroService: fetched heroes");
    //Por ahora simulamos obtener los datos del servidor remoto devolviendo HEROES (mock).
    return of(HEROES); //of(HEROES) retorna Observable<Hero[]> que emite un valor (en este caso un array).
  }*/

  /*GET hero from RxJS of() function that return an array of mock heroes as an Observable<Hero>
  getHero(id: number): Observable<Hero> {
    //Template literals are string literals allowing embedded expressions.
    //You can use multi-line strings and string interpolation features with them.
    //En el mensaje se está usando template literals.
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }*/

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    //To catch errors, you "pipe" the observable result from http.get() through an RxJS catchError() operator.
    //Tap into the ObservableRxJS tap operator, which looks at the observable values,
    //does something with those values, and passes them along.
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log("fetched heroes")),
      catchError(this.handleError("getHeroes", []))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`; //api/heroes/id
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>("updateHero"))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>("addHero"))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === "number" ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>("deleteHero"))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>("searchHeroes", []))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
