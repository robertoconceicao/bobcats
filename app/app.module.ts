// Modulos Angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
//Imports for loading & configuring the in-memory web api
import { HttpModule, XHRBackend }  from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//Routers array
import { AppComponent }         from './app.component';
import { routing }        from './app.routing';

// Components
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';

// Services
import { HeroService} from './hero.service';
import { Auth }       from './auth.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    routing,
    HttpModule 
  ],  
  declarations: [ 
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent 
  ],  
  providers: [
    HeroService,
    Auth,
    { provide: XHRBackend, useClass: InMemoryBackendService },
    { provide: SEED_DATA, useClass: InMemoryDataService }
  ],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }