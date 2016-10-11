import { Component } from '@angular/core';
//import { DatePickerComponent } from '../../angular2-simple-datepicker';

import { Usuario } from '../../classes/usuario';
import { Sujeito } from '../../classes/sujeito';
import { Municipio } from '../../classes/municipio';
import { UsuarioService } from '../../services/usuario.service';

import { MunicipioService}   from '../../services/municipio.service';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'usuario-perfil',  
  templateUrl:'app/components/usuario-cad/usuario.component.html'
  //,directives: [DatePickerComponent]
})

export class UsuarioComponent implements OnInit {
    
    public sujeito: Sujeito;
    //public selectedMunicipio: Municipio;    
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
      console.log(this.sujeito.toString);

      this.usuarioService.saveSujeito(this.sujeito)
          .then(response => {
            console.log(response.json());           
            if(response.json().Sujeito.length > 0){
                this.success = "Dados cadastrado com sucesso ...";
            } else {
                this.error = "Erro ao salvar os dados"; 
            }
          })
          .catch(error => {
              this.error = "Erro ao salvar os dados";
          });      
    }
}