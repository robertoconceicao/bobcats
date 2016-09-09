import { Component }                  from '@angular/core';
import { Auth }                       from './auth.service';
import { LoginService }               from './login/login.service';

import './rxjs-extensions';

@Component({
    selector: 'my-app',   
    templateUrl: 'app/app.template.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
  constructor(private auth: Auth,
    private login: LoginService ) {
  }  
};