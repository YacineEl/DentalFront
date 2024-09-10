import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl: string = 'http://localhost:8080/api/payments';

  constructor(private http: HttpClient) { }

  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.baseUrl}`);
  }

  createPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(`${this.baseUrl}`, payment);
  }

  getPaymentsByPatientId(id: string): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.baseUrl}/patient/${id}`);
  }

  getPaymentsToday(): Observable<Payment[]> {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return this.http.get<Payment[]>(`${this.baseUrl}/d/${formattedDate}`);
  }
}
