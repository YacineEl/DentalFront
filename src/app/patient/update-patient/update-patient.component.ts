import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Patient } from '../../models/patient.model';
import {PatientService} from "../../service/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent implements OnInit {
  patientForm!: FormGroup;
  patient!: Patient;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: [''],
      gender: [''],
      phoneNumber: [''],
      address: [''],
      notes: [''],
      hasAllergies: [false],
      identificationNo: [''],
      emergencyContactName: [''],
      emergencyContactNo: ['']
    });

    const patientId = Number(this.route.snapshot.paramMap.get('id'));

    this.patientService.getPatientById(patientId).subscribe((patient: Patient) => {
      this.patient = patient;
      this.patientForm.patchValue({
        id: patient.id,
        firstName: patient.firstName,
        lastName: patient.lastName,
        dateOfBirth: patient.dateOfBirth,
        gender: patient.gender,
        phoneNumber: patient.phoneNumber,
        address: patient.address,
        notes: patient.notes,
        hasAllergies: patient.hasAllergies,
        identificationNo: patient.identificationNo,
        emergencyContactName: patient.emergencyContactName,
        emergencyContactNo: patient.emergencyContactNo
      });
    });
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
      const updatedPatient: Patient = {
        id: this.patient.id,
        ...this.patientForm.value
      };
      this.patientService.updatePatient(this.patient.id, updatedPatient).subscribe(
        () => {
          this.showNotification('Patient updated successfully', 'success');
          this.router.navigate(['patients']);
        },
        () => {
          this.showNotification('Failed to update patient', 'error');
        }
      );
    }
  }

  private showNotification(message: string, type: 'success' | 'error'): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: type === 'success' ? ['success-notification'] : ['error-notification']
    });
  }
}
