import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-vaardproces-detail',
  templateUrl: './step-typer.component.html',
  styleUrls: ['./step-typer.component.css']
})
export class VaardprocesDetailComponent {
  
  constructor (
    private route: ActivatedRoute, 
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }
}
