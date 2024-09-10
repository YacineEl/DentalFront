import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Appointment } from '../../models/appointment.model';
import { Patient } from '../../models/patient.model';
import {PatientService} from "../../service/patient.service";

@Component({
  selector: 'app-add-appointment-dialog',
  templateUrl: './add-appointment-dialog.component.html',
  styleUrls: ['./add-appointment-dialog.component.css']
})
export class AddAppointmentDialogComponent implements OnInit {
  appointmentForm!: FormGroup;
  patients: Patient[] = [];
  filteredPatients: Patient[] = [];


  displayPatientName(patient: Patient): string {
    return patient ? `${patient.firstName} ${patient.lastName}` : '';
  }
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddAppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      patient: [''],
      date: [''],
      time: ['']
    });

    this.patientService.getPatients().subscribe(patients => {
      this.patients = patients;
      this.filteredPatients = patients;
    });
  }

  onPatientInput(): void {
    const searchTerm = this.appointmentForm.get('patient')?.value.toLowerCase();
    this.filteredPatients = this.patients.filter(patient =>
      `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(searchTerm)
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    if (this.appointmentForm.valid) {
      const appointment: Appointment = {
        acts: [],
        dateTime: this.appointmentForm.get('date')?.value,
        patient: this.appointmentForm.get('patient')?.value,
        validationStatus: false
      };
      this.dialogRef.close(appointment);
    }
  }
}
