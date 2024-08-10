import {Component, AfterViewInit, ViewChild, OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from '../../models/patient.model';
import {PatientService} from "../../service/patient.service";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit{
  patients: Patient[] = [];

  constructor(private patientService: PatientService) {
  }

  ngOnInit(){
    this.loadPatients();
  }

  loadPatients():void{
    this.patientService.getPatients().subscribe(patients => this.patients = patients);
  }
}
