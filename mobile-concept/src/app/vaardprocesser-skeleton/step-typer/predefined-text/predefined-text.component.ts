import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IVaardproces } from 'src/app/ivaardproces';
import { VaardprocesService } from 'src/app/vaardproces.service';


@Component({
  selector: 'app-predefined-text',
  templateUrl: './predefined-text.component.html',
  styleUrls: ['./predefined-text.component.css']
})
export class PredefinedTextComponent {


  vaardproces?: IVaardproces;

  constructor(
    private route: ActivatedRoute,
    private vaardprocesService: VaardprocesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getVaardproces();
  }

  getVaardproces(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vaardprocesService
      .getVaardproces(id)
      .subscribe((vaardproces) => (this.vaardproces = vaardproces));
  }
}
