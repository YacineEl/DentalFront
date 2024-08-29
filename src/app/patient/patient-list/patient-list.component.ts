import {Component, OnInit} from '@angular/core';
import { Patient } from '../../models/patient.model';
import {PatientService} from "../../service/patient.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit{
  patients: Patient[] = [];

  constructor(private patientService: PatientService,
              private route: Router) {
  }

  ngOnInit(){
    this.loadPatients();
  }

  loadPatients():void{
    this.patientService.getPatients().subscribe(patients => {
      this.patients = patients
      console.table(patients);
    });
  }
  onAddPatient(){
    this.route.navigate(['/create-patient'])
  }
}
