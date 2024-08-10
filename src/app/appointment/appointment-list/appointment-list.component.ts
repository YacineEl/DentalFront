import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../models/appointment.model";
import {Patient} from "../../models/patient.model";
import {AppointmentService} from "../../service/appointment.service";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.appointmentService.getAppointments().subscribe(appointments => this.appointments = appointments);
  }
}
