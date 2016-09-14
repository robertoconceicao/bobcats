import { Component }                  from '@angular/core';
import { Auth }                       from './services/auth.service';

import './rxjs-extensions';

//@Component({
//    selector: 'my-app',   
//    templateUrl: 'app/app.template.html',
//    styleUrls: ['app/app.component.css']
//})

@Component({
    selector: 'my-app',
    template: `
      <div class="container-fluid">
          <router-outlet></router-outlet>
      </div>
      `
    })

export class AppComponent {    
};