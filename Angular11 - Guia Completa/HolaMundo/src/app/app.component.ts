import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textoPlaceholder: string = 'Escriba algo aqui'
  deshabilitado: boolean = true;
  imageSrc: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'

  constructor() {
    setInterval(() => this.deshabilitado = false, 2000)
  }

  getSuma(numero1: number, numero2: number): number {
    return numero1 + numero2;
  }
}
