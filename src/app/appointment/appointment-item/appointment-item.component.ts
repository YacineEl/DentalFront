import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Appointment} from "../../models/appointment.model";
import {AppointmentService} from "../../service/appointment.service";
import {Router} from "@angular/router";

@Component({
  selector: '[app-appointment-item]',
  templateUrl: './appointment-item.component.html',
  styleUrl: './appointment-item.component.css'
})
export class AppointmentItemComponent implements OnInit {
  @Input() appointment!: Appointment;
  @Output() updateAppointment = new EventEmitter<Appointment>();


  constructor(private route: Router) {
  }

  validateAppointment() {
    this.appointment.isValidated = true;
    this.updateAppointment.emit(this.appointment);
  }

  OnPatientClick() {
    this.route.navigate(['/patients',this.appointment.patient?.id]);
  }

  ngOnInit(): void {

  }
}
