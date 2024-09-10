import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Act} from "../models/act.model";
import {ActTitle} from "../models/ActTitle";

@Injectable({
  providedIn: 'root'
})
export class ActService {

  private baseUrl: string = "http://localhost:8080/api/acts";
  private otherUrl: string = "http://localhost:8080/api/appointments/acts";

  constructor(private http: HttpClient) { }

  // getActs(): Observable<Act[]> {
  //   return this.http.get<Act[]>(`${this.baseUrl}`);
  // }

  getActTitles(): Observable<ActTitle[]> {
    return this.http.get<ActTitle[]>(`${this.baseUrl}`);
  }

  addActTitle(title: string): Observable<ActTitle> {
    return this.http.post<ActTitle>(`${this.baseUrl}`,title);
  }

  saveAct(id: number | undefined, act: Act): Observable<Act> {
    return this.http.put<Act>(`${this.otherUrl}/${id}`, act);
  }

  getActsByAppointmentId(id: number): Observable<Act[]> {
    return this.http.get<Act[]>(`${this.otherUrl}/${id}`);
  }
}
