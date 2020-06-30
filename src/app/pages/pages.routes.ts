import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { LoginGuard } from '../shared/seguridad/login-guard.service';
import { ProductoListComponent } from './productos/producto-list/producto-list.component';
import { ProductoFormComponent } from './productos/producto-form/producto-form.component';


const pagesRoutes: Routes = [
  {
    path:'', 
    component: PagesComponent,
    children:[
      {path:'dashboard', component: DashboardComponent },
      {path:'progress', component: ProgressComponent },
      {path:'graficas1', component: Graficas1Component },
      {path:'producto', component: ProductoListComponent },
      {path:'producto/add', component: ProductoFormComponent },
      {path:'producto/:id', component: ProductoFormComponent },
      {path:'', redirectTo:'/dashboard',pathMatch: 'full' },
    ],
    canActivate: [LoginGuard] 
   },
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);