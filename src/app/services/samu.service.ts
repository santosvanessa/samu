import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {

  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }

  getoMunicipiosAtendidosDoEstado(meuid: number): Dados[] {
    var munatendidos: Dados[] = [];
    for(let mun of VALORES){
      if(mun.uf_id == meuid) munatendidos.push(mun);
    }
    return munatendidos;
  }
}
