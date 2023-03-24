import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IpatientInfo } from '../ipatient-info';

import { IVaardproces } from '../ivaardproces';
import { PatientInfoService } from '../patient-info.service';
import { VaardprocesService } from '../vaardproces.service';

@Component({
  selector: 'app-notification-screen',
  templateUrl: './notification-screen.component.html',
  styleUrls: ['./notification-screen.component.css']
})
export class NotificationScreenComponent {
  vaardprocesser: IVaardproces[] = [];
  patientInfo?: IpatientInfo;

  today: number = Date.now();

  constructor (
    private route: ActivatedRoute,
    private vaardprocesService: VaardprocesService,
    private patientinfoService: PatientInfoService,
    
    ) {}

  ngOnInit(): void {
    this.getVaardprocesser();
    this.getPatientInfo();
  }

  getVaardprocesser(): void {
    this.vaardprocesService.getVaardprocesser()
    .subscribe(vaardprocesser => {this.vaardprocesser = vaardprocesser.slice(1, vaardprocesser.length)});
  }
  getPatientInfo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.patientinfoService
    .getPatientInfo(id)
    .subscribe((patientInfo) => (this.patientInfo = patientInfo))
  }

}
