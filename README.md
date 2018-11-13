# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# angular-heroes

## Prerequisitos para crear/configurar un proyecto Angular.

Descargar node.js (incluye npm package manager).
Instalar Angular/CLI globalmente `npm install -g @angular/cli`.

## Creación del repositorio en git para el proyecto.

`echo "# qwe" >> README.md`
`git init`
`git add README.md`
`git commit -m "first commit"`
`git remote add origin https://github.com/Fabiannnn/elRepositorio.git`
`git push -u origin master`

## Angular - Componentes

Los componentes son los bloques de construcción fundamentales de las aplicaciones Angular.
TIP: Al generar el componente con Angular CLI, la misma es agregada automaticamente al modulo AppModule.

## Data-binding: Interpolación o unidireccional.

`{{}}` para indicar binding unidireccional. Se usa para visualizar elementos/cosas calculados ya sea
en el texto del elemento HTML o en el atributo del mismo.
`[()]` para indicar binding bidireccional. Se usa para visualizar elementos/cosas calculados ya sea
en el texto del elemento HTML o en el atributo del mismo y también guardar los cambios hechos desde la vista.

<h3>
  {{title}}
  <img src="{{heroImageUrl}}">
</h3>

## Pipes

Un concepto similar a los transformers de Arena son los pipes que permiten definir un formato deseado.

<h2>{{hero.name | uppercase}} Details</h2>

## Event binding

You declare your interest in user actions through Angular event binding. Event binding syntax consists of a target event name within parentheses on the left of an equal sign, and a quoted template statement on the right.

<button (click)="onSave()">Save</button>

## Class binding

You can add and remove CSS class names from an element's class attribute with a class binding.

## Property binding

Write a template property binding to set a property of a view element. The binding sets the property to the value of a template expression. It's a one way data binding.

## Input (property binding)

An Input property is a settable property annotated with an @Input decorator.

## Dependency Injection

Dependency injection (DI), is an important application design pattern. DI is a coding pattern in which a class asks for dependencies from external sources rather than creating them itself.

## Provider

A provider is something that can create or deliver a service.
By default, the Angular CLI command ng generate service registers a provider with the root injector for your service by including provider metadata in the @Injectable decorator.

## Lifecycle Hooks

A component has a lifecycle managed by Angular.
Angular creates it, renders it, creates and renders its children, checks it when its data-bound properties change, and destroys it before removing it from the DOM.

## Lifecycle sequence

After creating a component/directive by calling its constructor, Angular calls the lifecycle hook methods in the following sequence: `ngOnChanges()`, `ngOnInit()`, `ngDoCheck()`, etc.

## Observable data

Cuando creamos un servicio que retorna objetos mockeados, podemos decir que la misma devuelve un resultado sincrónico. Esto no siempre va a funcionar, en el momento que utilicemos un servicio de un servidor remoto (la cual es asincronico por naturaleza) se produce una inconveniencia ya que el servicio debe esperar a que el servidor remoto le responda por lo que el servicio NO puede retornar inmediatamente lo que haya ido a buscar. De este modo, es necesario metodos asincrónicos, ya sea por una llamada devuelta, una promesa o un observable.

## HttpClient

The HttpClient in @angular/common/http offers a simplified client HTTP API for Angular applications that rests on the XMLHttpRequest interface exposed by browsers.
HttpClient is available as an injectable class, with methods to perform HTTP requests.

## Observable Class

Observable is one of the key classes in the RxJS library. Angular's HttpClient methods return RxJS Observables.
RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.

## Routing

The Angular Router enables navigation from one view to the next as users perform application tasks.
An Angular best practice is to load and configure the router in a separate, top-level module that is dedicated to routing and imported by the root AppModule.

## RouterModule	

A separate NgModule that provides the necessary service providers and directives for navigating through application views. Se puede generar de la siguiente manera:
`ng generate module app-routing --flat --module=app`
--flat puts the file in src/app instead of its own folder.
--module=app tells the CLI to register it in the imports array of the AppModule.

## Routes

Routes tell the router which view to display when a user clicks a link or pastes a URL into the browser address bar.
A typical Angular Route has two properties:
1) path: a string that matches the URL in the browser address bar.
2) component: the component that the router should create when navigating to this route.

## RouterModule.forRoot()

The method is called forRoot() because you configure the router at the application's root level. The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.

## RouterLink

Lets you link to specific routes in your app.

## Default Route

When the app starts, the browsers address bar points to the web site's root.
To make the app navigate to the dashboard automatically, add a default route to the AppRoutingModule.Routes array.
Ex: `{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },`

## AsyncPipe

The $ is a convention that indicates heroes$ is an Observable, not an array. The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted.
`<li *ngFor="let hero of heroes$ | async" >`

## Template reference variables ( #var )

A template reference variable is often a reference to a DOM element within a template. It can also be a reference to an Angular component or directive or a web component.
Use the hash symbol (#) to declare a reference variable. You can refer to a template reference variable anywhere in the template.