import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../classes/usuario';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {    
    private loginUrl   = 'http://localhost:3000/api/usuariologin'; //URL to web api

    constructor(
        private http: Http
    ){}
    
    login(usuario: Usuario) {
        let headers = new Headers({'Content-Type':'application/json'});                
        return this.http
                    .put(this.loginUrl, JSON.stringify(usuario), {headers: headers})
                    .toPromise();
    }

    private handleError(error: any){
        console.error('An error occorred', error);
        return Promise.reject(error.message || error);
    }     
}