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
import { UsuarioLoginFormComponent }    from './components/login/usuario-login-form.component';
import { UsuarioCadFormComponent }      from './components/usuario-cad/usuario-cad-form.component';
import { UsuarioComponent }             from './components/usuario-cad/usuario.component';
import { DashboardComponent }           from './components/dashboard/dashboard.component';
import { MensagemComponent }            from './components/mensagem/mensagem.component';
import { MunicipioComponent }           from './components/municipio/municipio.component';
import { NavbarComponent }              from './components/navbar/navbar.component';

// Services
import { UsuarioService}      from './services/usuario.service';
import { LoginService}        from './services/login.service';
import { MunicipioService}    from './services/municipio.service';
import { Auth }               from './services/auth.service';

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
    MunicipioComponent,
    NavbarComponent 
  ],  
  providers: [
    UsuarioService,
    LoginService,
    MunicipioService,
    Auth,
    { provide: 'CanAlwaysActivateGuard',
      useValue: () => {
        return true;
      }
    }
  ],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }