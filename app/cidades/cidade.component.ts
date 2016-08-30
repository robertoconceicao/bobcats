import { Component } from '@angular/core';
import { CodigoDescricao } from '../classes/codigodescricao';
import { CidadeService } from './cidade.service';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cidade-estado',  
  templateUrl:'app/cidades/cidade.component.html'
})


export class CidadeComponent implements OnInit {
    
    public selectedCidade: CodigoDescricao;
    public cidades: CodigoDescricao[];
    public selectedEstado: CodigoDescricao;
    public estados: CodigoDescricao[];
    error: any;
    
    constructor(
      private router: Router,
      private cidadeService: CidadeService
      ){}

    getEstados(){
      this.cidadeService.getEstados().then(estados => this.estados = estados);      
    }
    getCidades(){      
      this.cidadeService.getCidades(this.selectedEstado).then(cidades => this.cidades = cidades);
    }
    ngOnInit() {
      this.getEstados();
    } 
    onSelect(estado: CodigoDescricao) { 
      this.selectedEstado = estado;
      this.getCidades(); 
    }
}