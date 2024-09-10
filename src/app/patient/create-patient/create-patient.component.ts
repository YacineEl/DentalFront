import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {PatientService} from "../../service/patient.service";
import {Patient} from "../../models/patient.model";

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent {

  patientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private router: Router
  ) {
    this.patientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: [null],
      gender: [null],
      phoneNumber: [null],
      address: [null],
      notes: [null],
      hasAllergies: [null],
      identificationNo: [null],
      emergencyContactName: [null],
      emergencyContactNo: [null]
    });
  }

  ngOnInit(): void {

  }

  savePatient(patient: Patient) {
    this.patientService.savePatient(patient).subscribe(() => {
      this.goToPatientList();
    });
  }

  goToPatientList() {
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
      const formData = this.patientForm.value;
      const newPatient = new Patient(
        0,
        formData.firstName,
        formData.lastName,
        formData.dateOfBirth,
        formData.gender,
        formData.phoneNumber,
        formData.address,
        formData.notes,
        formData.hasAllergies,
        formData.identificationNo,
        formData.emergencyContactName,
        formData.emergencyContactNo,
        []
      );
      this.savePatient(newPatient);
    }
  }
}
