import {Component, Input, Output} from '@angular/core';
import {Appointment} from "../../models/appointment.model";
import {AppointmentService} from "../../service/appointment.service";

@Component({
  selector: '[app-appointment-item]',
  templateUrl: './appointment-item.component.html',
  styleUrl: './appointment-item.component.css'
})
export class AppointmentItemComponent {
  @Input() appointment!: Appointment;


  constructor(private appointmentService: AppointmentService) {
  }

  validateAppointment(appointment: Appointment) {
    appointment.isValidated = true;
    this.appointmentService.
    console.log(appointment);
  }
}
