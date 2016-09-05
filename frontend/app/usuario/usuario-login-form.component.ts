import { Component } from '@angular/core';
import { Usuario }    from '../classes/usuario';
import { UsuarioService } from './usuario.service';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: 'app/usuario/usuario-login-form.component.html'
})

export class UsuarioLoginFormComponent implements OnInit {
  usuario: Usuario;  
  submitted: boolean;
  error: any;
  success: any;

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
    this.usuario.flativo = 1;
    this.usuarioService.login(this.usuario)
        .then(success => {
            this.success = "Login sucesso ...";
        })
        .catch(error => {
            this.error = "Erro ao efetuar login, usuario/senha inválido";
        });
  }
}