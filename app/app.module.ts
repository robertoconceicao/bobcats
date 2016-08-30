// Modulos Angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, Headers, JsonpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

//Routers array
import { AppComponent }         from './app.component';
import { routing }              from './app.routing';

// Components
import { UsuarioComponent }         from './usuario/usuario.component';
import { DashboardComponent }       from './usuario/dashboard.component';
import { UsuarioDetailComponent }   from './usuario/usuario-detail.component';
import { MensagemComponent }        from './mensagem/mensagem.component';
import { CidadeComponent }          from './cidades/cidade.component';

// Services
import { UsuarioService}  from './usuario/usuario.service';
import { CidadeService}   from './cidades/cidade.service';
import { Auth }           from './auth.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing 
  ],  
  declarations: [ 
    AppComponent,
    UsuarioComponent,
    DashboardComponent,
    UsuarioDetailComponent,
    MensagemComponent,
    CidadeComponent 
  ],  
  providers: [
    UsuarioService,
    CidadeService,
    Auth,   
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }