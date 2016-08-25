import { Component } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'usuario-perfil',  
  templateUrl:'app/usuario.component.html'
})

export class UsuarioComponent implements OnInit {
    
    public selectedUsuario: Usuario;
    public usuarios: Usuario[];
    error: any;
    
    constructor(
      private router: Router,
      private usuarioService: UsuarioService
      ){}

    getUsuarios(){
     // this.usuarioService.getUsuarios().then(usuarios => this.usuarios = usuarios);
    }

    ngOnInit() {
      this.getUsuarios();
    } 

    onSelect(usuario: Usuario) { 
      this.selectedUsuario = usuario; 
    }

    gotoDetail(){
      this.router.navigate(['/detail',this.selectedUsuario.id]);
    }
}