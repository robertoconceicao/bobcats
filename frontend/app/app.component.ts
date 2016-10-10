import { Component }                  from '@angular/core';
import { Auth }                       from './services/auth.service';
import {LoginService}                 from './services/login.service';

import './rxjs-extensions';

//@Component({
//    selector: 'my-app',   
//    templateUrl: 'app/app.template.html',
//    styleUrls: ['app/app.component.css']
//})

@Component({
    selector: 'my-app',
    template: `    
      <navbar></navbar>      
      `
    })

export class AppComponent {
    constructor(private loginService: LoginService) {
    }

    get authenticated() {
        return this.loginService.canActivate();
    }    
};