import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IVaardproces } from './ivaardproces';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const vaardprocesser = [
      { id: 1, procesName: "procesOne"},
      { id: 2, procesName: "procesTwo" },
      { id: 3, procesName: "procesThree" },
      { id: 4, procesName: "procesFour" },
      { id: 5, procesName: "procesFive" },
      { id: 6, procesName: "procesSix" },
      { id: 7, procesName: "procesSeven" },
      { id: 8, procesName: "procesEight" },
      { id: 9, procesName: "procesNine" },  
    ];

    return {vaardprocesser};
  }
  genIdVaardprocesser(vaardprocesser: IVaardproces[]): number {
    return vaardprocesser.length > 0 ? Math.max(...vaardprocesser.map(vaardproces => vaardproces.id)) + 1 : 11;
  }
}
