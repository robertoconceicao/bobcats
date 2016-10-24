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
  selector: 'usuario-perfil',  
  templateUrl:'app/components/usuario-cad/usuario.component.html',
  directives: [MunicipioComponent]  
})

export class UsuarioComponent implements OnInit {
    
    public sujeito: Sujeito;
    public selectedMunicipio: Municipio;
    submitted: boolean;
    error: any;
    success: any;
    deLogin: string;
    public generos = [{value: 'F', name: 'Fêminino'}, {value: 'M', name: 'Masculino'}];    
    
    constructor(
      private router: Router,
      private usuarioService: UsuarioService,
      private municipioService: MunicipioService
      ){}

    ngOnInit() {
        this.sujeito = new Sujeito();
        this.sujeito.flSexo = 'F';
        this.selectedMunicipio = new Municipio();
        this.submitted = false;

        this.getDadosSujeito();        
    } 

    getDadosSujeito(){
       this.deLogin = localStorage.getItem("deLogin");
       this.usuarioService.getDadosSujeito(this.deLogin)                    
                    .then(response => {
                        console.log(response);           
                        if(response.length > 0){                      
                            this.sujeito = response[0];   
                            this.getMunicipioSujeito(this.sujeito.cdMunicipio);
                        } 
                    })
                    .catch(error => {
                        console.log("Erro ao buscar dados do sujeito");
                    });  
    }

    getMunicipioSujeito(cdMunicipio: string){
        this.municipioService.getMunicipioById(cdMunicipio)
                    .then(response => {
                        console.log(response);           
                        if(response.length > 0){                      
                            this.selectedMunicipio = response[0];
                            this.onNotifyMunicipio(this.selectedMunicipio);
                        } 
                    })
                    .catch(error => {
                        console.log("Erro ao buscar municipio do sujeito");
                    });
    }

    onSubmit() {
      this.submitted = false;
      this.sujeito.cdUsuario = localStorage.getItem("cdUsuario");
      this.sujeito.cdMunicipio = this.selectedMunicipio.cdMunicipio;
      this.sujeito.nmMunicipio = this.selectedMunicipio.nmMunicipio;
      
      console.log(this.sujeito.toString);

      this.usuarioService.saveSujeito(this.sujeito)
          .then(response => {
            console.log(response.json());           
            if(response.json().Message == "Success"){
                this.success = "Dados cadastrado com sucesso ...";
            } else {
                this.error = "Erro ao salvar os dados"; 
            }
          })
          .catch(error => {
              this.error = "Erro ao salvar os dados";
          });      
    }

    onNotifyMunicipio(municipio: Municipio):void {
        console.log("municipio: "+municipio.cdMunicipio+"; "+municipio.nmMunicipio+"; "+municipio.nmEstado);
        this.selectedMunicipio = municipio;
    }

    onDateChanged(event:any) {
        console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
    }
}