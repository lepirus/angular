import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onEventFired(firedNumber: number) {
    console.log('onEventFired method!');
    console.log('firedNumber: ' + firedNumber);
  }
}
