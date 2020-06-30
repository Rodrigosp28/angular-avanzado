import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import { APP_ROUTES } from './app.routes';

// componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// modules
import { PagesModule } from './pages/pages.module';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginGuard } from './shared/seguridad/login-guard.service';
import { SinDatosComponent } from './components/sin-datos/sin-datos.component';
import { ErrorComponent } from './components/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
