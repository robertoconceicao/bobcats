import { Component, OnInit, Output, Input } from '@angular/core';
import { CodigoDescricao } from '../classes/codigodescricao';
import { CidadeService } from './cidade.service';

import { Router } from '@angular/router';

@Component({
  selector: 'cidade-estado',  
  templateUrl:'app/cidades/cidade.component.html'
})


export class CidadeComponent implements OnInit {
    
    @Input() selectedCidade: CodigoDescricao;
    @Input() selectedEstado: CodigoDescricao;
    public cidades: CodigoDescricao[];
    public estados: CodigoDescricao[];
    error: any;
    
    constructor(
      private router: Router,
      private cidadeService: CidadeService
      ){
        //this.selectedEstado = new CodigoDescricao();
        //this.selectedCidade = new CodigoDescricao();
      }

    getEstados(){
      this.cidadeService.getEstados().then(estados => this.estados = estados);
      console.log("chamando metodo getEstados");      
    }
    getCidades(){      
      this.cidadeService.getCidades(this.selectedEstado).then(cidades => this.cidades = cidades);
      console.log("chamando metodo getCidades");
    }
    ngOnInit() {
      this.getEstados();
    } 
    onSelect(estado: CodigoDescricao) { 
      this.selectedEstado = estado;
      this.getCidades(); 
    }
}