import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../classes/usuario';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'mensagem',
  templateUrl: 'app/mensagem/mensagem.component.html',
  styleUrls: ['app/mensagem/mensagem.component.css']
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