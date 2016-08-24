import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
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
        let link = ['/detail', usuario.id];
        this.router.navigate(link);
    }
}