// Modulos Angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//Routers array
import { AppComponent }         from './app.component';
import { routing }              from './app.routing';

//Modulo calendario

// Components
import { UsuarioLoginFormComponent }    from './components/login/usuario-login-form.component';
import { UsuarioCadFormComponent }      from './components/usuario-cad/usuario-cad-form.component';
import { ListaUsuariosComponent }       from './components/usuario-cad/lista-usuarios.component';
import { UsuarioComponent }             from './components/usuario-cad/usuario.component';
import { DashboardComponent }           from './components/dashboard/dashboard.component';
import { MensagemComponent }            from './components/mensagem/mensagem.component';
import { MunicipioComponent }           from './components/municipio/municipio.component';
import { NavbarComponent }              from './components/navbar/navbar.component';
import { PortalComponent }              from './components/portal/portal.component';
import { FooterComponent }              from './components/footer/footer.component';
//import { UploadFileComponent }          from './components/upload-file/upload-file.component';


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
    NavbarComponent,
    ListaUsuariosComponent,
    PortalComponent,
    FooterComponent
  ],  
  providers: [
    UsuarioService,
    LoginService,
    MunicipioService,
    Auth,
    { provide: 'CanAlwaysActivateGuard',
      useValue: () => {
        return false;
      }
    }
  ],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }