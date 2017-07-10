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
    uf: UF;
    munatendidos: Dados[];
    meuid= 52;
    media: number;

    constructor(private ufService: UFService, private samuService: SamuService)
    {

    }
    ngOnInit(): void {
        this.uf = this.ufService.getById(this.meuid);
        this.munatendidos = this.samuService.getoMunicipiosAtendidosDoEstado(this.meuid);
        this.media = this.calculomedia();
    }

    calculomedia(): number {
      var total = 0;
      for(let mun of this.munatendidos){
        total+=mun.valor;
      }
      return Math.round(total/this.munatendidos.length);
    }
}
