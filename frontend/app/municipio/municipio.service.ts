import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Municipio } from '../classes/municipio';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';
import '../rxjs-extensions';


@Injectable()
export class MunicipioService {
    private municipioUrl = 'http://localhost:3000/api/municipio'; //URL to web api

    constructor(
        private http: Http
    ){}
    
    getMunicipios() {
        return this.http.get(this.municipioUrl)
                    .toPromise()
                    .then(response => response.json().data as Municipio[])
                    .catch(this.handleError);        
    }    
    private handleError(error: any){
       console.log('An error occorred: '+ error);
       return Promise.reject(error.message || error);
    }

    search(term: string): Observable<Municipio[]> {
        return this.http
                .get(`${this.municipioUrl}/${term}`)
                .map((r: Response) => r.json().Municipios as Municipio[]);
    }
}