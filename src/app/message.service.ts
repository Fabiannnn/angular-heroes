import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  messages: string[] = []; //Importante inicializarlo porque sino tira undefined function.

  constructor() {}

  add(message: string): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }
}
