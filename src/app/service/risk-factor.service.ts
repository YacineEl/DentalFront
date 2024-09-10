import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RiskFactor} from "../models/risk-factor.model";

@Injectable({
  providedIn: 'root'
})
export class RiskFactorService {

  private baseUrl: string = 'http://localhost:8080/api/risk';
  constructor(private http: HttpClient) { }

  getRisks(): Observable<RiskFactor[]> {
    return this.http.get<RiskFactor[]>(`${this.baseUrl}`);
  }

  saveRisk(riskFactor: RiskFactor): Observable<RiskFactor> {
    return this.http.post<RiskFactor>(`${this.baseUrl}`, riskFactor);
  }

  updatePatientRisks(id: number, selectedRiskIds: number[]) {
    return this.http.put(`${this.baseUrl}/patient/${id}`, selectedRiskIds);
  }
}
