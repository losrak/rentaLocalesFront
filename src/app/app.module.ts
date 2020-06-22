import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalesComponent } from './components/locales/locales.component';
import { LocalComponent } from './components/local/local.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RentarComponent } from './components/rentar/rentar.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalesComponent,
    LocalComponent,
    NavbarComponent,
    RentarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
