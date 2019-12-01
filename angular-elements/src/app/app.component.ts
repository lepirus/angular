import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AlertComponent } from './alert.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-elements';
  content = null;

  constructor(injector: Injector, domSanitizer: DomSanitizer) {
    const AlertElement = createCustomElement(AlertComponent, {injector});
    customElements.define('my-alert', AlertElement);
    setTimeout(() => {
      // this.content = "<p>A paragraph!</p>";
      domSanitizer.bypassSecurityTrustHtml(this.content = '<my-alert message=\'Rendered dynamically\'></my-alert>');
    }, 1000);
  }
}
