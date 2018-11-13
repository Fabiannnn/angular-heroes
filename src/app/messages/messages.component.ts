import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  //The messageService property must be public because you're about to bind to it in the template.
  //IMPORTANTE: Angular only binds to public component properties.
  //Esto quiere decir que si queremos utilizar propiedades de MessageService desde este componente
  //en la plantilla, es necesario que lo injectemos como una propiedad pública.
  constructor(public messageService: MessageService) {}

  ngOnInit() {}
}
