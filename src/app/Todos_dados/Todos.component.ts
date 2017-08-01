import { Component, OnInit } from '@angular/core';
import {UF} from '../types/uf';
import {UFService} from '../services/uf.service'
import {Dados} from '../types/samu';
import {SamuService} from '../services/samu.service';
import {DadoNome} from '../types/TodosDados';
import {MetodoTodos} from '../services/Metodotodos.service'

@Component({
  selector: 'app-root',
  templateUrl: './todos.component.html',
  styleUrls: ['../app.component.css']
})
export class todosComponent implements OnInit {
 minha_UF : UF;
 munatendidos: Dados[] = [];
 media : number;
 samu : Dados[];
 dados: DadoNome[];


    constructor(private ufService: UFService, private samuService: SamuService, private metodoTodos: MetodoTodos)
    { }


    ngOnInit(): void {
      /*this.metodoTodos.unirDados().then(dados => this.dados dados)

      this.ufService.getById(52).then(uf => this.minha_UF = uf)
        .then(uf => this.samuService.getPorUFMunicipiosAtendidosPorEstado(uf))
        .then()
         = ;*/
    }
    calculomedia(): number {
      var total = 0;
      for(let mun of this.munatendidos){
        total+=mun.valor;
      }
      return Math.round(total/this.munatendidos.length);
    }

}
