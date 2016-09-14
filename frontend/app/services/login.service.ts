import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../classes/usuario';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {    
    private loginUrl   = 'http://localhost:3000/api/usuariologin'; //URL to web api
    private usuarioLogado: Usuario;

    constructor(
        private http: Http,
        private router: Router
    ){}
    
    login(usuario: Usuario) : Promise<boolean> {
        let headers = new Headers({'Content-Type':'application/json'});
        return this.http
            .put(this.loginUrl, JSON.stringify(usuario), {headers: headers})
            .toPromise()
            .then(response => {
                console.log(response.json());           
                if(response.json().Usuarios.length > 0){                      
                    this.usuarioLogado = response.json().Usuarios[0] as Usuario;
                    localStorage.setItem('id_token', this.geraIdToken(this.usuarioLogado));                    
                    this.router.navigate(['/dashboard', this.usuarioLogado.cdUsuario]);
                    return true;           
                } else {
                    return false;
                }
            })
            .catch(error => {
                return false;
            });                        
    }

    private handleError(error: any){
        console.error('An error occorred', error);
        return Promise.reject(error.message || error);
    }    

    public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };

    public logout() {
    // Remove token from localStorage
        localStorage.removeItem('id_token');
        this.goTelaLogin();
    };

    public geraIdToken(usuario: Usuario){
        return JSON.stringify(usuario); 
    };

    public getUsuarioLogado(){
        return this.usuarioLogado;
    }; 

    public goTelaLogin(){
        this.router.navigate(['/login']);
    }
}