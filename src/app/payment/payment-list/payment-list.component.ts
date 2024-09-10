import { Component, OnInit } from '@angular/core';
import { Payment } from '../../models/payment.model';
import { Patient } from '../../models/patient.model';
import { PaymentService } from '../../service/payment.service';
import { PatientService } from '../../service/patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css'] // Ensure the path is correct if you're using CSS
})
export class PaymentListComponent implements OnInit {
  payments: Payment[] = [];
  patientName: string = '';

  constructor(
    private paymentService: PaymentService,
    private patientService: PatientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadPatientPayments();
  }

  loadPayments() {
    this.paymentService.getPayments().subscribe(payments => {
      this.payments = payments;
      console.table(this.payments);
    });
  }

  loadPatientPayments() {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.patientService.getPatientById(Number(id)).subscribe(
      (patient: Patient) => {
        this.patientName = patient.firstName + ' ' + patient.lastName;
      },
      error => {
        console.error('Error fetching patient data', error);
      }
    );
    this.paymentService.getPaymentsByPatientId(id).subscribe(payments => {
      this.payments = payments;
      console.table(this.payments);
    });
  }
}
