import { Component } from '@angular/core';
//import { DatePickerComponent } from '../../angular2-simple-datepicker';

import { Usuario } from '../../classes/usuario';
import { Sujeito } from '../../classes/sujeito';
import { Municipio } from '../../classes/municipio';
import { UsuarioService } from '../../services/usuario.service';

import { MunicipioService}   from '../../services/municipio.service';
import { MunicipioComponent } from '../municipio/municipio.component';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lista-usuarios',  
  templateUrl:'app/components/usuario-cad/lista-usuarios.component.html',
  directives: [MunicipioComponent]  
})

export class ListaUsuariosComponent implements OnInit {
    
    public listaUsuarios: Array<Sujeito>;
    public selectedMunicipio: Municipio;    
    submitted: boolean;
    error: any;
    success: any;        
    
    constructor(
      private router: Router,
      private usuarioService: UsuarioService
      ){}

    ngOnInit() {
        this.listaUsuarios = new Array<Sujeito>();        
        this.submitted = false;        
    } 

    onSubmit() {
      this.submitted = false;         
    }

    onNotifyMunicipio(municipio: Municipio):void {
        console.log("municipio: "+municipio.cdMunicipio+"; "+municipio.nmMunicipio+"; "+municipio.nmEstado);
        this.selectedMunicipio = municipio;
    }
}