import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Appointment} from "../models/appointment.model";
import {Act} from "../models/act.model";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl: string = 'http://localhost:8080/api/appointments';

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}`);
  }

  getAppointmentById(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.baseUrl}/${id}`);
  }

  createAppointment(appointment: Appointment) {
    return this.http.post<Appointment>(`${this.baseUrl}`, appointment);
  }

  getAppointmentsByPatientId(id: string) {
    return this.http.get<Appointment[]>(`${this.baseUrl}/patient/${id}`);
  }

  getAppointmentsToday(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return this.http.get<Appointment[]>(`${this.baseUrl}/d/${formattedDate}`);
  }

  validateAppointment(id: string, amount: number){
    return this.http.put<Appointment>(`${this.baseUrl}/validate/${id}`,amount);
  }
  getActsByAppointmentId(id: number){
    return this.http.get<Act[]>(`${this.baseUrl}/acts/${id}`);
  }

  addActToAppointment(id:number, act: Act){
    return this.http.put<Act>(`${this.baseUrl}/acts/${id}`, act);
  }
}
