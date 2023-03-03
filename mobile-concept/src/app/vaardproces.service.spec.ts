import { TestBed } from '@angular/core/testing';

import { VaardprocesService } from './vaardproces.service';

describe('VaardprocesService', () => {
  let service: VaardprocesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaardprocesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
