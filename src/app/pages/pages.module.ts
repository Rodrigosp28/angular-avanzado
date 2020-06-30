import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';

// componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { CommonModule } from '@angular/common';
import { ProductoListComponent } from './productos/producto-list/producto-list.component';
import { ProductoFormComponent } from './productos/producto-form/producto-form.component';
import { AppModule } from '../app.module';
import { ComponentModule } from '../components/components.module';

@NgModule({
  declarations:[
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
    ProductoListComponent,
    ProductoFormComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,
    ComponentModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent,
    ProductoListComponent,
    ProductoFormComponent
  ]
})
export class PagesModule {}