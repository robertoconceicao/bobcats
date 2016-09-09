import { Routes, RouterModule } from '@angular/router';

import { AppComponent }         from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { DashboardComponent } from './usuario/dashboard.component';
import { UsuarioLoginFormComponent } from './login/usuario-login-form.component';
import { UsuarioCadFormComponent } from './usuario/usuario-cad-form.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { MunicipioComponent } from './municipio/municipio.component';

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
    path: 'principal/:cdUsuario',
    component: AppComponent 
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
    path: 'dashboard',
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