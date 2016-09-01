import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { CodigoDescricao } from '../classes/codigodescricao';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';
import '../rxjs-extensions';


@Injectable()
export class CidadeService {
    private estadoUrl = 'http://localhost:8081/api/estados'; //URL to web api
    private cidadeUrl = 'http://localhost:8081/api/cidades'; //URL to web api

    constructor(
        private http: Http
    ){}

    getEstados() {        
        return this.http.get(this.estadoUrl)
                    .toPromise()
                    .then(response => response.json().data as CodigoDescricao[])
                    .catch(this.handleError);
    }    
    getCidades(estado: CodigoDescricao) {
        //let url = `${this.cidadeUrl}/${estado.codigo}`;
        return this.http.get(this.cidadeUrl)
                    .toPromise()
                    .then(response => response.json().data as CodigoDescricao[])
                    .catch(this.handleError);        
    }    
    private handleError(error: any){
       console.log('An error occorred: '+ error);
       return Promise.reject(error.message || error);
    }

    search(term: string): Observable<CodigoDescricao[]> {
        return this.http
                .get(`${this.cidadeUrl}/${term}`)
                .map((r: Response) => r.json() as CodigoDescricao[]);
    }
}