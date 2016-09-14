import { Component } from '@angular/core';
import { Usuario }    from '../../classes/usuario';
import { LoginService } from '../../services/login.service';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: 'app/components/login/usuario-login-form.component.html'
})

export class UsuarioLoginFormComponent implements OnInit {
  usuario: Usuario;  
  submitted: boolean;
  error: any;  
  usuarioLogado: Usuario;

  constructor(
      private router: Router,
      private loginService: LoginService
      ){}

  ngOnInit() {
    this.usuario = new Usuario();
    this.submitted = false;  
  } 

  onSubmit() {
    this.error = "";    
    this.submitted = true;
    this.usuario.flAtivo = 1;
    this.loginService.login(this.usuario)
    .then(response => {
        console.log(response.valueOf());
        if(!response.valueOf()){
          this.error = "Erro ao efetuar login, usuario/senha inválido";
          this.submitted = false;
        }
    }).catch(error => {
          this.error = "Erro ao efetuar login, usuario/senha inválido";
          this.submitted = false;
    });

    /*
        .then(response => {
           console.log(response.json());           
           if(response.json().Usuarios.length > 0){
              this.success = "Login sucesso ...";  
              this.usuarioLogado = response.json().Usuarios[0] as Usuario;

              localStorage.setItem('id_token', this.geraIdToken(this.usuarioLogado));
              
              this.router.navigate(['/dashboard', this.usuarioLogado.cdUsuario]);           
           } else {
              this.error = "Erro ao efetuar login, usuario/senha inválido";
              this.submitted = false; 
           }
        })
        .catch(error => {
            this.error = "Erro ao efetuar login, usuario/senha inválido";
            this.submitted = false;
        });
        */
  }
}