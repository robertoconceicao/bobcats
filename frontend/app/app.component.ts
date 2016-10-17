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
        <div *ngIf="authenticated">
            <navbar></navbar>      
        </div>
        <div *ngIf="!authenticated">
            <portal></portal>      
        </div>

        <div class="container">    
            <router-outlet></router-outlet>
        </div>
      `
    })

export class AppComponent {
    constructor(private loginService: LoginService) {
    }

    get authenticated() {
        return localStorage.getItem("cdUsuario") != null;
    }    
};