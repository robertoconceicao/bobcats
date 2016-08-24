import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './usuario.component';
import { DashboardComponent } from './dashboard.component';
import { UsuarioDetailComponent } from './usuario-detail.component';
import { MensagemComponent } from './mensagem.component';

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