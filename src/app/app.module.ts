import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PartidosActivosComponent } from './componentes/partidos-activos/partidos-activos.component';
import { DetallePartidoComponent } from './componentes/detalle-partido/detalle-partido.component';

@NgModule({
  declarations: [
    AppComponent,
    PartidosActivosComponent,
    DetallePartidoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
