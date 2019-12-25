import { NgModule } from '@angular/core';
import { AppComponent } from '../../../ng-universal-01-start/src/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [AppRoutingModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}