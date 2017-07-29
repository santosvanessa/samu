import { Component, OnInit } from '@angular/core';
import {UF} from './types/uf';
import {UFService} from './services/uf.service'
import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'
import {UFs} from './services/mock-ufs'

@Component({
  selector: 'app-root',
  templateUrl: './todososdados.component.html',
  styleUrls: ['./app.component.css'],
})
export class TodosOsDadosComponent implements OnInit {
    title = 'Todos os dados';
    id = 52;
    media: number;
    mun: Dados[];
    uf : UF;
    dados_da_samu : Dados[];

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.uf = this.ufService.getPorID(this.id);
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.media = this.samuService.getMunMedia(this.id);

    }
}
