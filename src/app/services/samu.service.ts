import { Injectable } from '@angular/core';
import { UF } from '../types/uf';
import { Dados } from '../types/samu';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SamuService {
  private samuUrl = 'https://samu.restlet.net/v1/valores/samu.json';  // URL to web api

  constructor(private http: Http) { }

  getAllMunicipiosAtendidosPorEstado(): Promise<Dados[]> {
    return this.http.get(this.samuUrl)
               .toPromise()
               .then(response => response.json().valores as Dados[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

  getPorUFMunicipiosAtendidosPorEstado(uf: UF): Promise<Dados[]>{
    return this.getAllMunicipiosAtendidosPorEstado()
    .then(municipios => municipios.filter(mun => mun.uf_id === uf.id))
  }
}
