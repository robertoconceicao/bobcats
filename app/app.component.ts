import { Component }         from '@angular/core';
import { Auth }              from './auth.service';
import './rxjs-extensions';

@Component({
    selector: 'my-app',
   // template:`
   // <h1>{{title}}</h1>
   // <nav>
   //   <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
   //   <a routerLink="/usuarios" routerLinkActive="active">Usuarios</a>
   // </nav>
   // <router-outlet></router-outlet>
 // `
    templateUrl: 'app/app.template.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
  constructor(private auth: Auth) {
  }  
};