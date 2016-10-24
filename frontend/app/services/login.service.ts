import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../classes/usuario';
import { Router, CanActivate} from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

//https://jwt.io/introduction/
//http://blog.thoughtram.io/angular/2016/07/18/guards-in-angular-2.html

@Injectable()
export class LoginService implements CanActivate {    
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
                    localStorage.setItem('cdUsuario', ""+this.usuarioLogado.cdUsuario);
                    localStorage.setItem('deLogin', ""+this.usuarioLogado.deLogin);
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

    public canActivate() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
        console.log("chamando método canActivate ....");
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