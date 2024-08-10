import {Component, Input} from '@angular/core';
import {Patient} from "../../models/patient.model";

@Component({
  selector: '[app-patient-item]',
  templateUrl: './patient-item.component.html',
  styleUrl: './patient-item.component.css'
})
export class PatientItemComponent {
  @Input() patient!: Patient;
}
