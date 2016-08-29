import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CodigoDescricao } from './CodigoDescricao';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CidadeService {
    private estadoUrl = '/api/estado'; //URL to web api
    private cidadeUrl = '/api/cidade'; //URL to web api

    constructor(
        private http: Http
    ){}
    getEstados(){
        return this.http.get(this.estadoUrl)
                    .toPromise()
                    .then(response => response.json().data as CodigoDescricao[])
                    .catch(this.handleError);
    }    
    getCidades(estado: CodigoDescricao) {
        let url = `${this.cidadeUrl}/${estado.codigo}`;
        return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data as CodigoDescricao[])
                    .catch(this.handleError);        
    }
    private handleError(error: any){
        console.error('An error occorred', error);
        return Promise.reject(error.message || error);
    }
}