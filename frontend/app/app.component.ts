import { Component }                  from '@angular/core';
import { Auth }                       from './services/auth.service';
import {LoginService}                 from './services/login.service';

import './rxjs-extensions';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        
        <div class="container">    
            <router-outlet></router-outlet>
        </div>

        <footer></footer>
      `
    })

export class AppComponent {
    constructor(private loginService: LoginService) {
    }    
};