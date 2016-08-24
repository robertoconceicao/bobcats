// Modulos Angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Http, Headers } from '@angular/http';

//Routers array
import { AppComponent }         from './app.component';
import { routing }              from './app.routing';

// Components
import { UsuarioComponent }      from './usuario.component';
import { DashboardComponent }   from './dashboard.component';
import { UsuarioDetailComponent }  from './usuario-detail.component';

// Services
import { UsuarioService} from './usuario.service';
import { Auth }       from './auth.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    routing 
  ],  
  declarations: [ 
    AppComponent,
    UsuarioComponent,
    DashboardComponent,
    UsuarioDetailComponent 
  ],  
  providers: [
    UsuarioService,
    Auth,
    Http
  ],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }