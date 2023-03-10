import { Component } from '@angular/core';
import { IVaardproces } from './ivaardproces';
import { VaardprocesService } from './vaardproces.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vårdprocesser';

  selectedVaardproces?: IVaardproces;

  vaardprocesser: IVaardproces[] = [];

  constructor(private vaardprocesService: VaardprocesService) {}

  ngOnInit(): void {
    this.getVaardprocesser();
    this.vaardprocesser
  }

  getVaardprocesser(): void {
    this.vaardprocesService.getVaardprocesser().subscribe((vaardprocesser) => {
      this.vaardprocesser = vaardprocesser.slice(1, vaardprocesser.length);
    })
  }
}
