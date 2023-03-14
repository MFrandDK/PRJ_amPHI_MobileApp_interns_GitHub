import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IVaardproces } from 'src/app/ivaardproces';
import { VaardprocesService } from 'src/app/vaardproces.service';
import { IpatientInfo } from 'src/app/ipatient-info';
import { PatientInfoService } from 'src/app/patient-info.service';

@Component({
  selector: 'app-registrering',
  templateUrl: './registrering.component.html',
  styleUrls: ['./registrering.component.css']
})
export class RegistreringComponent {

  @Input()
  vaardproces?: IVaardproces;
  patientInfo?: IpatientInfo;

  constructor(
    private route: ActivatedRoute,
    private vaardprocesService: VaardprocesService,
    private patientinfoService: PatientInfoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getVaardproces();
    this.getPatientInfo();
  }

  getVaardproces(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vaardprocesService
      .getVaardproces(id)
      .subscribe((vaardproces) => (this.vaardproces = vaardproces));
  }
  getPatientInfo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.patientinfoService
    .getPatientInfo(id)
    .subscribe((patientInfo) => (this.patientInfo = patientInfo))
  }
}
