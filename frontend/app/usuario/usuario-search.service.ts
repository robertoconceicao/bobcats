import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Usuario }           from '../classes/usuario';

@Injectable()
export class UsuarioSearchService {
  
  constructor(private http: Http) {}
  
  search(term: string) {
    return this.http
               .get(`api/usuario/?name=${term}`)
               .map((r: Response) => r.json().data as Usuario[]);
  }
}