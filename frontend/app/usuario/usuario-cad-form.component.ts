import { Component } from '@angular/core';
import { Usuario }    from '../classes/usuario';
import { UsuarioService } from './usuario.service';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'usuario-cad-form',
  templateUrl: 'app/usuario/usuario-cad-form.component.html'
})

export class UsuarioCadFormComponent implements OnInit {
  usuario: Usuario;
  confirmasenha: string;
  submitted: boolean;
  error: any;

  constructor(
      private router: Router,
      private usuarioService: UsuarioService
      ){}

  ngOnInit() {
    this.usuario = new Usuario();
    this.submitted = false;  
  } 

  onSubmit() {
    this.submitted = true;
    this.error = this.usuarioService.save(this.usuario);
  }
  // TODO: Remove this when we're done
  get diagnostic() { 
      return JSON.stringify(this.usuario) + "confirmasenha: "+ this.confirmasenha; 
  }

  senhasIguais(){
    if(!!this.usuario.desenha && !!this.confirmasenha){
      return this.usuario.desenha === this.confirmasenha;
    }
    return true;  
  }
}