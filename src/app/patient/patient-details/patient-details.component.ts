import {Component, Input, OnInit} from '@angular/core';
import {Patient} from "../../models/patient.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PatientService} from "../../service/patient.service";
import {AppointmentService} from "../../service/appointment.service";

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.css'
})
export class PatientDetailsComponent implements OnInit {
  patientToDisplay: Patient | undefined;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private patientService: PatientService,
              private appointmentService: AppointmentService,) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.patientService.getPatientById(id).subscribe(patient => this.patientToDisplay = patient);
  }

  editPatient() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.router.navigate(['/update-patient', id]);
  }

  viewAppointments() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.router.navigate([`/appointments/patient/${id}`]);
  }

}
