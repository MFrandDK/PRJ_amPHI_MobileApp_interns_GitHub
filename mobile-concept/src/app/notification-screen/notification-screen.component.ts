import { Component } from '@angular/core';

import { IVaardproces } from '../ivaardproces';
import { VaardprocesService } from '../vaardproces.service';

@Component({
  selector: 'app-notification-screen',
  templateUrl: './notification-screen.component.html',
  styleUrls: ['./notification-screen.component.css']
})
export class NotificationScreenComponent {
  vaardprocesser: IVaardproces[] = [];

  today: number = Date.now();

  constructor (private vaardprocesService: VaardprocesService) {}

  ngOnInit(): void {
    this.getVaardprocesser();
  }

  getVaardprocesser(): void {
    this.vaardprocesService.getVaardprocesser()
    .subscribe(vaardprocesser => {this.vaardprocesser = vaardprocesser.slice(1, vaardprocesser.length)});
  }

}
