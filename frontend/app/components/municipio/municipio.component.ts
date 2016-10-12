import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Municipio } from '../../classes/municipio';
import { MunicipioService } from '../../services/municipio.service';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { Router } from '@angular/router';

@Component({
  selector: 'localizacao',  
  templateUrl:'app/components/municipio/municipio.component.html',
  styleUrls: ['app/components/municipio/municipio.component.css']
})


export class MunicipioComponent implements OnInit {
    
    @Input() selectedMunicipio: Municipio;    
    municipios: Observable<Municipio[]>;
    @Output() notify: EventEmitter<Municipio> = new EventEmitter<Municipio>();

    private searchTerms = new Subject<string>();
    error: any;
    
    constructor(
      private router: Router,
      private municipioService: MunicipioService
      ){}

    ngOnInit(): void {
        this.selectedMunicipio = new Municipio();

        this.municipios = this.searchTerms
        .debounceTime(300)        // wait for 300ms pause in events
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(term => term   // switch to new observable each time
            // return the http search observable
            ? this.municipioService.search(term)
            // or the observable of empty heroes if no search term
            : Observable.of<Municipio[]>([]))
          .catch(error => {
            // TODO: real error handling
            console.log(error);
            return Observable.of<Municipio[]>([]);
        });
    } 
    // Push a search term into the observable stream.
    search(term: string): void {
      this.searchTerms.next(term);
    }
    onSelectedMunicipio(municipio: Municipio){
      console.log("Chamando metodo: onSelectedMunicipio "+ municipio);
      this.selectedMunicipio = municipio;
      this.search("");
      
      this.notify.emit(this.selectedMunicipio);
    }
}