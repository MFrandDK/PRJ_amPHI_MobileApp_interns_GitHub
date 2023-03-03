import { Component, OnInit } from '@angular/core';

import { IVaardproces } from '../ivaardproces';
import { VaardprocesService } from '../vaardproces.service';

@Component({
  selector: 'app-vaardprocesser-skeleton',
  templateUrl: './vaardprocesser-skeleton.component.html',
  styleUrls: ['./vaardprocesser-skeleton.component.css']
})
export class VaardprocesserSkeletonComponent implements OnInit {
  vaardprocesser: IVaardproces[] = [];

  constructor (private vaardprocesService: VaardprocesService) {}

  ngOnInit(): void {
    this.getVaardprocesser();
  }

  getVaardprocesser(): void {
    this.vaardprocesService.getVaardprocesser()
    .subscribe(vaardprocesser => {this.vaardprocesser = vaardprocesser.slice(1, vaardprocesser.length)});
  }

}
