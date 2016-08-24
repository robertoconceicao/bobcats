// Modulos Angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, Headers } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';


//Routers array
import { AppComponent }         from './app.component';
import { routing }              from './app.routing';

// Components
import { UsuarioComponent }         from './usuario.component';
import { DashboardComponent }       from './dashboard.component';
import { UsuarioDetailComponent }   from './usuario-detail.component';
import { MensagemComponent }        from './mensagem.component';

// Services
import { UsuarioService} from './usuario.service';
import { Auth }       from './auth.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    routing 
  ],  
  declarations: [ 
    AppComponent,
    UsuarioComponent,
    DashboardComponent,
    UsuarioDetailComponent,
    MensagemComponent 
  ],  
  providers: [
    UsuarioService,
    Auth,   
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }