import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../models/patient.model";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl: string = 'http://localhost:8080/api/patient';
  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}`);
  }

  savePatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.baseUrl}`, patient);
  }

  getPatientById(id: number) {
    return this.http.get<Patient>(`${this.baseUrl}/${id}`);
  }

  updatePatient(id: number, updatedPatient: Patient) {
    return this.http.put<Patient>(`${this.baseUrl}/${id}`, updatedPatient);
  }
}
