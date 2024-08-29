import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../models/appointment.model";
import {Patient} from "../../models/patient.model";
import {AppointmentService} from "../../service/appointment.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {PatientService} from "../../service/patient.service";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{
  appointments: Appointment[] = [];
  patientName: string = '';

  constructor(private appointmentService: AppointmentService,
              private patientService: PatientService,
              private route : ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.loadPatientAppointments();
  }

  loadAppointments() {
    this.appointmentService.getAppointments().subscribe(appointments => {
      this.appointments = appointments;
      console.table(this.appointments);
    });
  }

  loadPatientAppointments(){
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.patientService.getPatientById(Number(id)).subscribe(
      (patient: Patient) => {
        this.patientName = patient.firstName + ' ' + patient.lastName;
      },
      (error) => {
        console.error('Error fetching patient data', error);
      }
    );
    this.appointmentService.getAppointmentsByPatientId(id).subscribe(appointments => {
      this.appointments = appointments;
      console.table(this.appointments);
    })
  }
}
