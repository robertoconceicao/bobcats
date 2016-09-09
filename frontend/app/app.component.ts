import { Component }                  from '@angular/core';
import { Auth }                       from './auth.service';
import { UsuarioLoginFormComponent }  from './usuario/usuario-login-form.component';

import './rxjs-extensions';

@Component({
    selector: 'my-app',   
    templateUrl: 'app/app.template.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
  constructor(private auth: Auth,
    private login: UsuarioLoginFormComponent) {
  }  
};