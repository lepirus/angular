import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayParagraph = false;
  array = [];

  displayDetails() {
    this.displayParagraph = !this.displayParagraph;
    this.array.push(this.array.length + 1);
  }

}
