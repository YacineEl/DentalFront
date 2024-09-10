import {Component, Input} from '@angular/core';
import {Payment} from "../../models/payment.model";

@Component({
  selector: '[app-payment-item]',
  templateUrl: './payment-item.component.html',
  styleUrl: './payment-item.component.css'
})
export class PaymentItemComponent {
  @Input() payment!: Payment;
}
