import { NgModule } from "@angular/core";
import {FormsModule} from "@angular/forms";
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

@NgModule({
  declarations:[
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ],
  exports: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent
  ]
})
export class PagesModule {}