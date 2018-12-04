import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ej1Component } from './ejercicios/ej1/ej1.component';
import { Ej2Component } from './ejercicios/ej2/ej2.component';
import { Ej3Component } from './ejercicios/ej3/ej3.component';
import { Ej4Component } from './ejercicios/ej4/ej4.component';
import { Ej5Component } from './ejercicios/ej5/ej5.component';
import { Ej6Component } from './ejercicios/ej6/ej6.component';
import { Ej8Component } from './ejercicios/ej8/ej8.component';
import { Ej7Component } from './ejercicios/ej7/ej7.component';

@NgModule({
  declarations: [
    AppComponent,
    Ej1Component,
    Ej2Component,
    Ej3Component,
    Ej4Component,
    Ej5Component,
    Ej6Component,
    Ej8Component,
    Ej7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
