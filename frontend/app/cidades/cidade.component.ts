import { Component, OnInit, Output, Input } from '@angular/core';
import { CodigoDescricao } from '../classes/codigodescricao';
import { CidadeService } from './cidade.service';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { Router } from '@angular/router';

@Component({
  selector: 'cidade-estado',  
  templateUrl:'app/cidades/cidade.component.html',
  styleUrls: ['app/cidades/cidade.component.css']
})


export class CidadeComponent implements OnInit {
    
    selectedCidade: CodigoDescricao;
    selectedEstado: CodigoDescricao;
    public estados: CodigoDescricao[];
    
    cidades: Observable<CodigoDescricao[]>;
    private searchTerms = new Subject<string>();
    error: any;
    
    constructor(
      private router: Router,
      private cidadeService: CidadeService
      ){}

    getEstados(){
      console.log("chamando metodo getEstados");      
      this.cidadeService.getEstados().then(estados => this.estados = estados);
    }    

    ngOnInit(): void {
        this.cidades = this.searchTerms
        .debounceTime(300)        // wait for 300ms pause in events
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(term => term   // switch to new observable each time
            // return the http search observable
            ? this.cidadeService.search(term)
            // or the observable of empty heroes if no search term
            : Observable.of<CodigoDescricao[]>([]))
          .catch(error => {
            // TODO: real error handling
            console.log(error);
            return Observable.of<CodigoDescricao[]>([]);
        });
    } 
    // Push a search term into the observable stream.
    search(term: string): void {
      this.searchTerms.next(term);
    }
    onSelectedCidade(cidade: CodigoDescricao){
      this.selectedCidade = cidade;
    }
}