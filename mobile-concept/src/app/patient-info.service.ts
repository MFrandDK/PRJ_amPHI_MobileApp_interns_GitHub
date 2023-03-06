import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IpatientInfo } from './ipatient-info';
import { PATIENTS } from './mock-patient-info';

@Injectable({
  providedIn: 'root'
})
export class PatientInfoService {

private patientInfoUrl = "api/patient-info"; //Url to web api

  constructor(private http: HttpClient) { }

  getPatientInfoList(): Observable<IpatientInfo[]> { //get the entire list of patients
      return this.http.get<IpatientInfo[]>(this.patientInfoUrl)
  };

  getPatientInfo(id: number): Observable<IpatientInfo> { //get a specific patient with id match
   
      const patientInfo = PATIENTS.find(p =>p.id === id)!;
      return of(patientInfo);
  };
}
