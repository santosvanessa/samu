import { Component, OnInit } from '@angular/core';
import {UF} from '../types/uf';
import {UFService} from '../services/uf.service'
import {Dados} from '../types/samu';
import {SamuService} from '../services/samu.service';

@Component({
  selector: 'app-root',
  templateUrl: './Resumo.component.html',
  styleUrls: ['../app.component.css']
})

export class ResumoComponent implements OnInit {
  minha_UF : UF;
  media : number;

    constructor(private ufService: UFService, private samuService: SamuService)
    { }


    ngOnInit(): void {
      this.ufService.getById(52)
        .then(uf => this.minha_UF = uf)
        .then(uf => this.samuService.getPorUFMunicipiosAtendidosPorEstado(uf))
        .then(municipios => this.media = this.calculomedia(municipios))
    }


    calculomedia(munatendidos): number {
      var total = 0;
      munatendidos.forEach(item => total += item.valor);
      return Math.round(total/munatendidos.length);
    }
}
