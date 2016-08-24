import { Component }         from '@angular/core';
import { Auth }              from './auth.service';
import './rxjs-extensions';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html'
})

export class AppComponent {
  constructor(private auth: Auth) {}
};