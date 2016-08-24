import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'mensagem',
  templateUrl: 'app/mensagem.component.html',
  styleUrls: ['app/mensagem.component.css']
})

export class MensagemComponent implements OnInit { 

    usuarios: Usuario[] = [];
    constructor(
        private router: Router,
        private usuarioService: UsuarioService){}

    ngOnInit(){
       // this.usuarioService.getUsuarios()
            //.then(usuarios => this.usuarios = usuarios.slice(1, 5));    
    }
}