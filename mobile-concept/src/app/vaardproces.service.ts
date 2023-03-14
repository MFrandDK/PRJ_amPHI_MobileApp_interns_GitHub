import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IVaardproces } from './ivaardproces';
import { VAARDPROCESSER } from './vaardprocesser'; 


@Injectable({ providedIn: "root" })

export class VaardprocesService {
    private vaardprocesserUrl = "api/vaardprocesser"; //Url to web api

    constructor(private http: HttpClient) { }

    getVaardprocesser(): Observable<IVaardproces[]> {
        return this.http.get<IVaardproces[]>(this.vaardprocesserUrl)
    };

    getVaardproces(id: number): Observable<IVaardproces> {
         // For now, assume that a hero with the specified `id` always exists.
        // Error handling will be added in the next step of the tutorial.
        const vaardproces = VAARDPROCESSER.find(v =>v.id === id)!;
        return of(vaardproces);
    };
}
