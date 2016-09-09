import { Component } from '@angular/core';
import { Usuario }    from '../classes/usuario';
import { UsuarioService } from './usuario.service';

import { tokenNotExpired } from 'angular2-jwt';

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
  usuarioLogado: Usuario;

  constructor(
      private router: Router,
      private usuarioService: UsuarioService
      ){}

  ngOnInit() {
    this.usuario = new Usuario();
    this.submitted = false;  
  } 

  onSubmit() {
    this.error = "";
    this.success = "";
    this.submitted = true;
    this.usuario.flAtivo = 1;
    this.usuarioService.login(this.usuario)
        .then(response => {
           console.log(response.json());           
           if(response.json().Usuarios.length > 0){
              this.success = "Login sucesso ...";  
              this.usuarioLogado = response.json().Usuarios[0] as Usuario;

              localStorage.setItem('id_token', this.geraIdToken(this.usuarioLogado));           
           } else {
              this.error = "Erro ao efetuar login, usuario/senha inválido";
              this.submitted = false; 
           }
        })
        .catch(error => {
            this.error = "Erro ao efetuar login, usuario/senha inválido";
            this.submitted = false;
        });
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  };

  public geraIdToken(usuario: Usuario){
    return JSON.stringify(usuario); 
  };
}