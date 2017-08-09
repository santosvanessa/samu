import { Component, OnInit } from '@angular/core';
import {UF} from '../types/uf';
import {UFService} from '../services/uf.service'
import {Dados} from '../types/samu';
import {SamuService} from '../services/samu.service';
import {DadoNome} from '../types/TodosDados';
import {MetodoTodos} from '../services/metodotodos.service'

@Component({
  selector: 'app-root',
  templateUrl: './todos.component.html',
  styleUrls: ['../app.component.css']
})
export class todosComponent implements OnInit {
  ufs : UF[];
  dados_da_samu : Dados[];
  minha_UF : UF;
  munatendidos: Dados[] = [];
  samu : Dados[];
  dados: DadoNome[];
  media : number;

    constructor(private ufService: UFService, private samuService: SamuService, private metodoTodos: MetodoTodos)
    { }


    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.minha_UF = this.ufService.getById(52);
        this.munatendidos = this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.minha_UF);
        this.media = this.calculomedia();
        this.dados = this.metodoTodos.unirDados();
    }

    calculomedia(): number {
        var total = 0;
        for(let mun of this.munatendidos){
         total+=mun.valor;
       }
       return Math.round(total/this.munatendidos.length);
     }
}
