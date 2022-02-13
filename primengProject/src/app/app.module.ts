import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TestComponent } from './components/test/test.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

const primengModules = [
  ButtonModule,
  InputTextModule,
  MenubarModule,
  TabMenuModule,
  TableModule
];

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HomeComponent,
    MenuBarComponent,
    TestComponent
  ],
  imports: [
    primengModules,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
