import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Peter';

  constructor() {
    setInterval(() => this.nombre = 'Jhon', 2000)
  }

  getSuma(numero1: number, numero2: number): number {
    return numero1 + numero2;
  }
}
