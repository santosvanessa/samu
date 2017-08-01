import { Component, OnInit } from '@angular/core';
import {UF} from '../types/uf';
import {UFService} from '../services/uf.service'
import {Dados} from '../types/samu';
import {SamuService} from '../services/samu.service';

@Component({
  selector: 'app-root',
  templateUrl: './Dados_uf.component.html',
  styleUrls: ['../app.component.css']
})

export class dados_UFComponent implements OnInit {
  minha_UF : UF;
  munatendidos: Dados[];

 constructor(private ufService: UFService, private samuService: SamuService,
   private location: Location) { }

 ngOnInit(): void {
   this.ufService.getById(52)
     .then(uf => this.samuService.getPorUFMunicipiosAtendidosPorEstado(uf))
.then(municipios => this.munatendidos = municipios);
    }
}
