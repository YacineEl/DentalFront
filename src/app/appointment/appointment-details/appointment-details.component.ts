import { Component, Input } from '@angular/core';
import {Appointment} from "../../models/appointment.model";

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrl: './appointment-details.component.css'
})
export class AppointmentDetailsComponent {
  @Input() appointment!: Appointment;

}
