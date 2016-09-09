// Modulos Angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
//import { DatePickerComponent } from 'angular2-simple-datepicker';

//Routers array
import { AppComponent }         from './app.component';
import { routing }              from './app.routing';

// Components
import { UsuarioLoginFormComponent } from './usuario/usuario-login-form.component';
import { UsuarioCadFormComponent }  from './usuario/usuario-cad-form.component';
import { UsuarioComponent }         from './usuario/usuario.component';
import { DashboardComponent }       from './usuario/dashboard.component';
import { MensagemComponent }        from './mensagem/mensagem.component';
import { MunicipioComponent }          from './municipio/municipio.component';

// Services
import { UsuarioService}  from './usuario/usuario.service';
import { MunicipioService}   from './municipio/municipio.service';
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
    UsuarioLoginFormComponent,
    UsuarioCadFormComponent,
    UsuarioComponent,
    DashboardComponent,    
    MensagemComponent,
    MunicipioComponent 
  ],  
  providers: [
    UsuarioService,
    MunicipioService,
    Auth
  ],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }