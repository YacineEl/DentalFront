import {Component, Input} from '@angular/core';
import {Appointment} from "../../models/appointment.model";

@Component({
  selector: '[app-appointment-item]',
  templateUrl: './appointment-item.component.html',
  styleUrl: './appointment-item.component.css'
})
export class AppointmentItemComponent {
  @Input() appointment!: Appointment;

  viewDetails() {

  }
}
