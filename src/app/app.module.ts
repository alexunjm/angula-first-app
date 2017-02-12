import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SaludoComponent } from './home/saludo.component';
import { EnlaceDatosComponent } from './enlace-datos/enlace-datos.component';
import { ModelosComponent } from './enlace-datos/modelos.component';
import { CicloVidaComponent } from './ciclo-vida.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SaludoComponent,
    EnlaceDatosComponent,
    ModelosComponent,
    CicloVidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
