import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../classes/usuario';
import { UsuarioService } from './usuario.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/usuario/dashboard.component.html',
  styleUrls: ['app/usuario/dashboard.component.css']
})

export class DashboardComponent implements OnInit { 

    usuarios: Usuario[] = [];
    constructor(
        private router: Router,
        private usuarioService: UsuarioService){}

    ngOnInit(){
       // this.usuarioService.getUsuarios()
            //.then(usuarios => this.usuarios = usuarios.slice(1, 5));    
    }

    gotoDetail(usuario: Usuario){
        let link = ['/detail', usuario.cdusuario];
        this.router.navigate(link);
    }
}