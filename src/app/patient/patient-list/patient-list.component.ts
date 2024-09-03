import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient.model';
import { PatientService } from "../../service/patient.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  filteredPatients: Patient[] = [];
  paginatedPatients: Patient[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private patientService: PatientService, private route: Router) { }

  ngOnInit() {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getPatients().subscribe(patients => {
      this.patients = patients;
      this.filteredPatients = [...this.patients];
      this.updatePagination();
    });
  }

  onAddPatient() {
    this.route.navigate(['/create-patient']);
  }

  onSearch() {
    const term = this.searchTerm.toLowerCase();

    if (term) {
      this.filteredPatients = this.patients.filter(patient =>
        `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(term) ||
        (patient.phoneNumber && patient.phoneNumber.toLowerCase().includes(term)) ||
        (patient.identificationNo && patient.identificationNo.toLowerCase().includes(term))
      );
      this.paginatedPatients=this.filteredPatients;
    } else {
      this.filteredPatients = [...this.patients];
      this.currentPage = 1;
      this.updatePagination();
    }
  }

  onItemsPerPageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.itemsPerPage = +selectElement.value;
    this.updatePagination();
  }

  updatePagination() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedPatients = this.filteredPatients.slice(start, end);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  protected readonly Math = Math;

  get totalPages(): number {
    return Math.ceil(this.filteredPatients.length / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
