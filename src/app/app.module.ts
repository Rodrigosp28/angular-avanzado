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
import { FormsModule } from '@angular/forms';
import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
