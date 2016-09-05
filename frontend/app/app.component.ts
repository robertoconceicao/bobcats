import { Component }         from '@angular/core';
import { Auth }              from './auth.service';
import './rxjs-extensions';

@Component({
    selector: 'my-app',
    template: '<usuario-cad-form></usuario-cad-form>'   
    //templateUrl: 'app/app.template.html',
    //styleUrls: ['app/app.component.css']
})

export class AppComponent {
  constructor(private auth: Auth) {
  }  
};