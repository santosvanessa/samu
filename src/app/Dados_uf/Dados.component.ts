import { Component, OnInit } from '@angular/core';
import {UF} from '../types/uf';
import {UFService} from '../services/uf.service'
import {Dados} from '../types/samu';
import {SamuService} from '../services/samu.service';
import {DadoNome} from '../types/TodosDados';
import {MetodoTodos} from '../services/metodo-todos.service'

@Component({
  selector: 'app-root',
  templateUrl: './Dados_uf.component.html',
  styleUrls: ['../app.component.css']
})

export class Dados_UFComponent implements OnInit {
  ufs : UF[];
  dados_da_samu : Dados[];
  minha_UF : UF;
  munatendidos: Dados[];
  media : number;
  dados: DadoNome[];
    constructor(private ufService: UFService, private samuService: SamuService, private metodoTodos: MetodoTodos)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.minha_UF = this.ufService.getById(52);
        this.munatendidos = this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.minha_UF);
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
