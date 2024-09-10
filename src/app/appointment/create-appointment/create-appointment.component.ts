import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import {Patient} from "../../models/patient.model";
import {AppointmentService} from "../../service/appointment.service";
import {PatientService} from "../../service/patient.service";
import {Appointment} from "../../models/appointment.model";

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  appointmentForm!: FormGroup;
  patients: Patient[] = [];

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      patientId: [null, Validators.required],
      dateTime: [null, Validators.required]
    });

    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getPatients().subscribe((patients) => {
      this.patients = patients;
    });
  }

  saveAppointment(appointment: Appointment): void {
    this.appointmentService.createAppointment(appointment).subscribe(() => {
      this.goToAppointmentList();
    });
  }

  goToAppointmentList(): void {
    this.router.navigate(['appointments-today']);
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const formData = this.appointmentForm.value;

      const selectedPatient = this.patients.find(patient => patient.id == formData.patientId)

      const newAppointment = new Appointment(0,
        formData.dateTime,
        selectedPatient,
        false
      );

      this.saveAppointment(newAppointment);
    }
  }
}
