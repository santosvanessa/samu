import { Component, OnInit } from '@angular/core';
import {UF} from '../types/uf';
import {UFService} from '../services/uf.service'
import {Dados} from '../types/samu';
import {SamuService} from '../services/samu.service';
import {DadoNome} from '../types/TodosDados';
import {MetodoTodos} from '../services/Metodotodos.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './todos.component.html',
  styleUrls: ['../app.component.css']
})
export class todosComponent implements OnInit {
 munatendidos: Dados[] = [];


 constructor(private samuService: SamuService, private location: Location) { }

 ngOnInit() : void {
   this.samuService.getAllMunicipiosAtendidosPorEstadoComNome()
     .then(atendimentos => this.munatendidos = atendimentos);
 }

 goBack(): void {
   this.location.back();
 }

}
