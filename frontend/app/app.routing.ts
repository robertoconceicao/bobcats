import { Routes, RouterModule }         from '@angular/router';
import { LoginService }                   from './services/login.service';

import { AppComponent }                 from './app.component';
import { UsuarioLoginFormComponent }    from './components/login/usuario-login-form.component';
import { UsuarioCadFormComponent }      from './components/usuario-cad/usuario-cad-form.component';
import { UsuarioComponent }             from './components/usuario-cad/usuario.component';
import { DashboardComponent }           from './components/dashboard/dashboard.component';
import { MensagemComponent }            from './components/mensagem/mensagem.component';
import { MunicipioComponent }           from './components/municipio/municipio.component';
import { NavbarComponent }              from './components/navbar/navbar.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: UsuarioLoginFormComponent
  },
  {
    path: 'cad_usuario',
    component: UsuarioCadFormComponent,
    canActivate: ['CanAlwaysActivateGuard', LoginService]
  },
  {
    path: 'usuario/:cdUsuario',
    component: UsuarioComponent,
    canActivate: ['CanAlwaysActivateGuard', LoginService]
  },
  {
    path: 'usuarios',
    component: UsuarioComponent,
    canActivate: ['CanAlwaysActivateGuard', LoginService]
  },
  {
    path: 'dashboard/:cdUsuario',
    component: DashboardComponent,
    canActivate: ['CanAlwaysActivateGuard', LoginService]
  },  
  {
      path: 'mensagens/:cdUsuario',
      component: MensagemComponent,
      canActivate: ['CanAlwaysActivateGuard', LoginService]
  },
  {
      path: 'municipio',
      component: MunicipioComponent,
      canActivate: ['CanAlwaysActivateGuard', LoginService]
  }  
];

export const routing = RouterModule.forRoot(appRoutes);