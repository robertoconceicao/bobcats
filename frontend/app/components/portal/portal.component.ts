import { Component }  from '@angular/core';
import { Usuario }    from '../../classes/usuario';
import { LoginService } from '../../services/login.service';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'portal',
  templateUrl: 'app/components/portal/portal.component.html'
})

export class PortalComponent implements OnInit {
  usuario: Usuario;  
  submitted: boolean;
  error: any;  
  usuarioLogado: Usuario;
  cdUsuario: String;

  constructor(
      private router: Router,
      private loginService: LoginService
      ){
        console.log("Chamando construtor portal....");
        localStorage.removeItem("cdUsuario");
      }

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
        } else {          
          this.cdUsuario = localStorage.getItem("cdUsuario");
          console.log("Roteando para dashboard cdUsuario: "+this.cdUsuario);
          this.router.navigate(['/dashboard', this.cdUsuario]);
        }
    }).catch(error => {
          this.error = "Erro ao efetuar login, usuario/senha inválido";
          this.submitted = false;          
    });
  }

  cleanError(){
    if(!!this.error){
      this.error = "";
      console.log("Limpa var error");
    }
  }

  telaLogin(){
    this.router.navigate(['/login']);
  }
}