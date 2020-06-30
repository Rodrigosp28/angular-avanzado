import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './error/error.component';
import { LoadingComponent } from './loading/loading.component';
import { SinDatosComponent } from './sin-datos/sin-datos.component';


@NgModule({
  declarations:[
    ErrorComponent,
    LoadingComponent,
    SinDatosComponent
  ],
  exports:[
    ErrorComponent,
    LoadingComponent,
    SinDatosComponent
  ]
})
export class ComponentModule {}