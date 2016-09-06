import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../classes/usuario';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsuarioService {
    private usuarioUrl = 'http://localhost:3000/api/usuario'; //URL to web api
    private loginUrl = 'http://localhost:3000/api/usuariologin'; //URL to web api

    constructor(
        private http: Http
    ){}
    getUsuarios(){
        return this.http.get(this.usuarioUrl)
                    .toPromise()
                    .then(response => response.json().data as Usuario[])
                    .catch(this.handleError);
    }
    
    login(usuario: Usuario) {
        let headers = new Headers({'Content-Type':'application/json'});                
        return this.http
                    .put(this.loginUrl, JSON.stringify(usuario), {headers: headers})
                    .toPromise();
    }

    save(usuario: Usuario): Promise<any> {
        if(usuario.cdusuario) {
            return this.put(usuario);
        }
        return this.post(usuario);
    }

    //Delete
    delete(usuario: Usuario) {
        let headers = new Headers({'Content-Type':'application/json'});

        let url = `${this.usuarioUrl}/${usuario.cdusuario}`;

        return this.http
                    .delete(url, {headers: headers})
                    .toPromise()
                    .catch(this.handleError);
    }

    //Add
    private post(usuario: Usuario) : Promise<any> {
        let headers = new Headers({'Content-Type':'application/json'});

        return this.http
                    .post(this.usuarioUrl, JSON.stringify(usuario),{headers: headers})
                    .toPromise();
                    //.then(res => res.json())
                    //.catch(this.handleError);
    }

    //Edit
    private put(usuario: Usuario) : Promise<any> {
        let headers = new Headers({'Content-Type':'application/json'});
        let url = `${this.usuarioUrl}/${usuario.cdusuario}`;

        return this.http
                    .put(url, JSON.stringify(usuario), {headers: headers})
                    .toPromise();                    
    }

    private handleError(error: any){
        console.error('An error occorred', error);
        return Promise.reject(error.message || error);
    }
}