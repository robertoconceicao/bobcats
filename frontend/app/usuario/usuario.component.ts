import { Component } from '@angular/core';
import { DatePickerComponent } from '../../angular2-simple-datepicker';

import { Usuario } from '../classes/usuario';
import { Sujeito } from '../classes/sujeito';
import { UsuarioService } from './usuario.service';

import { MunicipioService}   from '../municipio/municipio.service';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'usuario-perfil',  
  templateUrl:'app/usuario/usuario.component.html',
  directives: [DatePickerComponent]
})

export class UsuarioComponent implements OnInit {
    
    public sujeito: Sujeito;    
    submitted: boolean;
    error: any;
    success: any;
    
    constructor(
      private router: Router,
      private usuarioService: UsuarioService
      ){}

    ngOnInit() {
        this.sujeito = new Sujeito();
        this.submitted = false;
    } 

    onSubmit() {
      this.submitted = false;
    }
}