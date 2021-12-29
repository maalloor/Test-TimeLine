import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { DetalleRequerimientoComponent } from './detalle-requerimiento/detalle-requerimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeLineComponent,
    DetalleRequerimientoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
