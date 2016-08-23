import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',  
  templateUrl:'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'] 
})

export class HeroesComponent implements OnInit {
    
    public heroes: Hero[];
    public selectedHero: Hero;
    public addingHero = false;
    error: any;
    
    constructor(
      private router: Router,
      private heroService: HeroService
      ){}

    getHeroes(){
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
      this.getHeroes();
    } 

    onSelect(hero: Hero) { 
      this.selectedHero = hero; 
    }

    gotoDetail(){
      this.router.navigate(['/detail',this.selectedHero.id]);
    }

    addHero(){
      this.addingHero = true;
      this.selectedHero = null;
    }

    close(savedHero: Hero) {
      this.addingHero = false;
      if(savedHero){
        this.getHeroes();
      }
    }

    deleteHero(hero: Hero, event: any) {
      event.stopPropagation();
      this.heroService
          .delete(hero)
          .then(res => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if(this.selectedHero === hero) {
              this.selectedHero = null;
            }
          })
          .catch(error => this.error = error);
    }
}