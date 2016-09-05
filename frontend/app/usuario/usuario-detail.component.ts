import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Usuario } from '../classes/usuario';
import { UsuarioService} from './usuario.service';
import { MunicipioComponent } from '../municipio/municipio.component';

@Component({
  selector: 'usuario-detail',
  templateUrl: 'app/usuario/usuario-detail.component.html'
})

export class UsuarioDetailComponent implements OnInit {
    @Input() usuario: Usuario;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    constructor(
      private usuarioService: UsuarioService,
      private route: ActivatedRoute
    ) {}

   ngOnInit() {
    
   }

   save(){
     this.usuarioService
          .save(this.usuario)
          .then(usuario => {
            this.usuario = usuario; //saved hero, w/ id if new
            this.goBack(usuario);
          })
          .catch(error => this.error = error); //TODO: Display error message
   }

   goBack(savedUsuario: Usuario = null) {
      this.close.emit(savedUsuario);
      if(this.navigated){
        window.history.back();
      }
   }
}