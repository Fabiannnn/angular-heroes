import { Component } from "@angular/core";
//Este componente es basicamente el componente padre de la aplicación, su selector es 'root'.
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Tour of Heroes"; //1) Cambiamos el valor de la propiedad 'title' de la clase AppComponent.
}
