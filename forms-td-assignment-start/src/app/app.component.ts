import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formLogin', {static: false}) loginForm: NgForm;
  defaultSubscription = 'Advanced';
  subscriptionsSelect = ['Basic', 'Advanced', 'Pro'];

  onSubmit() {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
  }
}
