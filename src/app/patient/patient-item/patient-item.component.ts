import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Patient} from "../../models/patient.model";
import {Router} from "@angular/router";

@Component({
  selector: '[app-patient-item]',
  templateUrl: './patient-item.component.html',
  styleUrl: './patient-item.component.css'
})
export class PatientItemComponent {
  @Input() patient!: Patient;

  constructor(private router:Router) {}

  SelectPatientDetails() {
    this.router.navigate(['/patients', this.patient.id]);
  }
}
