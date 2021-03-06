import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() eventFired = new EventEmitter<number>();
  cont = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }

  onStartSelected() {
    console.log('onStartSelected method!');
    this.interval = setInterval(() => {
      this.cont++;
      this.eventFired.emit(this.cont);
      console.log('Cont: ' + this.cont);
      }, 1000);
  }

  onPauseSelected() {
    clearInterval(this.interval);
  }

}
