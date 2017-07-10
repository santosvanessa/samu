import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService]
})
export class AppComponent implements OnInit {
    title = 'app';
    ufs : UF[];
    dados_da_samu : Dados[];
    Minha_uf: UF;
    munatendidos: Dados[] = [];
    meuid = 52;
    media: number;

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.Minha_uf = this.defineUF();
        this.media = this.calcularMunicipios();
    }

    defineUF(): UF {
      for(let uf of this.ufs){
        if(uf.id == this.meuid) return uf;
      }
    }

    calcularMunicipios(): number {
      var qnt = 0;
      var total = 0;
      for(let mun of this.dados_da_samu){
        if(mun.uf_id == this.meuid){
          qnt++;
          total+=mun.valor;
          this.munatendidos.push(mun);
        }
      }
return Math.round(total/qnt);
}}
