import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IpatientInfo } from './ipatient-info';
import { PATIENTS } from './mock-patient-info';


// Service should provide access to mock-patient array of patients for use in registration component
// Patient info is connected to an interface with a number of properties with different data types.
//registration component should change based on what patient you pick from the notification screen. 
// the patients are given an id from vaardproces to draw the notification screen buttons and an individual id from patient-info


@Injectable({
  providedIn: 'root'
})
export class PatientInfoService {
  private patientInfoUrl = "api/patientInfo"; //Url to web api

// private patients: IpatientInfo[] = [];

  constructor(private http: HttpClient) { }

  getPatients() {
    return(PATIENTS);
  }

  getPatientInfoList(): Observable<IpatientInfo[]> { //get the entire list of patients
      return this.http.get<IpatientInfo[]>(this.patientInfoUrl)
  };

  getPatientInfo(id: number): Observable<IpatientInfo> { //get a specific patient with id match
   
    const patient =  PATIENTS.find(p =>p.id === id)!;
      return of(patient);
  };
}
