// app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormularioModalComponent } from '../components/formulario-modal/formulario-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tabla1Component } from '../components/tabla1/tabla1.component';
import { SharedModule } from 'src/components/shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    Tabla1Component,
    FormularioModalComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],

  schemas:[

   CUSTOM_ELEMENTS_SCHEMA

  ],


  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
