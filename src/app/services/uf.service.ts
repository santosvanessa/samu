import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  getAll(): UF[] {
    return UFs;
  }
<<<<<<< HEAD
  getById(id: number){
=======

  getPorID(id: number) {
>>>>>>> 5f782e7f30c183ecb3d4f4461c37c183d73ee172
    for(let uf of UFs){
      if(uf.id == id) return uf;
    }
 }

}
