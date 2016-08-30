import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './usuario/usuario.component';
import { DashboardComponent } from './usuario/dashboard.component';
import { UsuarioDetailComponent } from './usuario/usuario-detail.component';
import { MensagemComponent } from './mensagem/mensagem.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
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
  }  
];

export const routing = RouterModule.forRoot(appRoutes);