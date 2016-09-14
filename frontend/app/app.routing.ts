import { Routes, RouterModule }         from '@angular/router';

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
    component: UsuarioCadFormComponent
  },
  {
    path: 'usuario/:cdUsuario',
    component: UsuarioComponent
  },
  {
    path: 'usuarios',
    component: UsuarioComponent
  },
  {
    path: 'dashboard/:cdUsuario',
    component: DashboardComponent
  },  
  {
      path: 'mensagens/:cdUsuario',
      component: MensagemComponent
  },
  {
      path: 'municipio',
      component: MunicipioComponent
  }  
];

export const routing = RouterModule.forRoot(appRoutes);