import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RiskFactor} from "../../models/risk-factor.model";
import {RiskFactorService} from "../../service/risk-factor.service";
import {Patient} from "../../models/patient.model";

@Component({
  selector: 'app-risk-factor',
  templateUrl: './risk-factor.component.html',
  styleUrl: './risk-factor.component.css'
})
export class RiskFactorComponent implements OnInit, OnChanges {
  riskFactors: RiskFactor[] = [];
  newRiskDescription: string = '';
  @Input() patient?:Patient;

  constructor(private riskFactorService: RiskFactorService) {}

  ngOnInit(): void {
    this.loadRiskFactors();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['patient'] && this.patient) {
      this.loadRiskFactors();
    }
  }

  loadRiskFactors(): void {
    this.riskFactorService.getRisks().subscribe((data: RiskFactor[]) => {
      this.riskFactors = data.map(risk => ({
        ...risk,
        selected: this.isRiskFactorSelectedForPatient(risk)
      }));
    });
  }

  isRiskFactorSelectedForPatient(risk: RiskFactor): boolean {
    return this.patient?.riskFactors?.some(patientRisk => {
      return patientRisk.id === risk.id;
    }) ?? false;
  }

  addRiskFactor(): void {
    if (this.newRiskDescription.trim()) {
      const newRisk = new RiskFactor(0, this.newRiskDescription);
      this.riskFactorService.saveRisk(newRisk).subscribe((addedRisk: RiskFactor) => {
        this.riskFactors.push(addedRisk);
        this.newRiskDescription = '';
      });
    }
  }

  onRiskChange(risk: RiskFactor, event: Event): void {
    risk.selected = (event.target as HTMLInputElement).checked;
  }
  updatePatientRisks(): void {
    if (this.patient) {
      const selectedRisks = this.riskFactors.filter(risk => risk.selected);
      const selectedRiskIds = selectedRisks.map(risk => risk.id);
      console.log('Updating patient risks with IDs:', selectedRiskIds);

      // Send the updated risks to the backend
      this.riskFactorService.updatePatientRisks(this.patient.id, selectedRiskIds).subscribe(response => {
        console.log('Successfully updated patient risks:', response);
        // Optionally refresh patient data or display a success message
      }, error => {
        console.error('Error updating patient risks:', error);
      });
    }
  }
}
