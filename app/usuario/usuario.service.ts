import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../classes/usuario';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsuarioService {
    private usuarioUrl = '/api/usuario'; //URL to web api

    constructor(
        private http: Http
    ){}
    getUsuarios(){
        return this.http.get(this.usuarioUrl)
                    .toPromise()
                    .then(response => response.json().data as Usuario[])
                    .catch(this.handleError);
    }
    
    getUsuario(login: number) {
        let url = `${this.usuarioUrl}/${login}`;
        return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data as Usuario)
                    .catch(this.handleError);        
    }

    save(usuario: Usuario): Promise<Usuario> {
        if(usuario.id) {
            return this.put(usuario);
        }
        return this.post(usuario);
    }

    //Delete
    delete(usuario: Usuario) {
        let headers = new Headers();
        headers.append('Content-Type','application/json');

        let url = `${this.usuarioUrl}/${usuario.id}`;

        return this.http
                    .delete(url, {headers: headers})
                    .toPromise()
                    .catch(this.handleError);
    }

    //Add
    private post(usuario: Usuario) : Promise<Usuario> {
        let headers = new Headers({'Content-Type':'application/json'});

        return this.http
                    .post(this.usuarioUrl, JSON.stringify(usuario),{headers: headers})
                    .toPromise()
                    .then(res => res.json().data)
                    .catch(this.handleError);
    }

    //Edit
    private put(usuario: Usuario) {
        let headers = new Headers();
        headers.append('Content-Type','application/json');

        let url = `${this.usuarioUrl}/${usuario.id}`;

        return this.http
                    .put(url, JSON.stringify(usuario), {headers: headers})
                    .toPromise()
                    .then(() => usuario)
                    .catch(this.handleError);
    }

    private handleError(error: any){
        console.error('An error occorred', error);
        return Promise.reject(error.message || error);
    }
}