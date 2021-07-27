import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { ConvertidorComponent } from './componets/convertidor/convertidor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConvertidorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
