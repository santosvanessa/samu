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
    munatendidos: Dados[];
    media: number;
    uf : UF;
    meuid = 52;

    constructor(private ufService: UFService, private samuService: SamuService)
    {

    }
    ngOnInit(): void {
        this.uf = this.ufService.getPorID(52);
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
