import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './usuario/usuario.component';
import { DashboardComponent } from './usuario/dashboard.component';
import { UsuarioDetailComponent } from './usuario/usuario-detail.component';
import { UsuarioLoginFormComponent } from './usuario/usuario-login-form.component';
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
    path: 'cad_usuario',
    component: UsuarioCadFormComponent
  },
  {
    path: 'usuario/:id',
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
      path: 'detail/:id',
      component: UsuarioDetailComponent
  },
  {
      path: 'mensagens/:id',
      component: MensagemComponent
  },
  {
      path: 'municipio',
      component: MunicipioComponent
  }  
];

export const routing = RouterModule.forRoot(appRoutes);