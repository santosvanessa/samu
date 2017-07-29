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
  title = '';
  ufs : UF[];
  dados_da_samu : Dados[];
  minha_UF: UF;
  munatendidos: Dados[] = [];
  meuid = 52;
  media: number;
  uf : UF;

    constructor(private ufService: UFService, private samuService: SamuService)
    {

    }
    ngOnInit(): void {

     this.ufs = this.ufService.getAll();
     this.minha_UF = this.ufService.getById(52);
     this.munatendidos = this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.minha_UF);
     this.media = this.calculomedia();
     this.title = this.defineTitle();
     }

     defineTitle(): string{
       for(let uf of this.ufs){
         if(uf.id == 52) return uf.nome;
       }
     }

    calculomedia(): number {
      var total = 0;
      for(let mun of this.munatendidos){
        total+=mun.valor;
      }
      return Math.round(total/this.munatendidos.length);
    }
}
