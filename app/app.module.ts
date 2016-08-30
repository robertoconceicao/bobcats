// Modulos Angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

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
    Auth
  ],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }