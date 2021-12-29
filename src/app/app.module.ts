import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { DetalleRequerimientoComponent } from './detalle-requerimiento/detalle-requerimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeLineComponent,
    FormsModule,
    DetalleRequerimientoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
