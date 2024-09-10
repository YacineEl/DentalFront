import { Component, OnInit } from '@angular/core';
import { Appointment } from "../../models/appointment.model";
import { AppointmentService } from "../../service/appointment.service";
import { Router } from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import { PaymentDialogComponent } from "../../payment/payment-dialog/payment-dialog.component";
import { AddAppointmentDialogComponent } from "../add-appontment-dialog/add-appointment-dialog.component";

function formatDate(date: Date): string {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysOfWeek[date.getDay()];
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();

  return `${dayName}-${day}-${month}-${year}`;
}

@Component({
  selector: 'app-appointments-today',
  templateUrl: './appointments-today.component.html',
  styleUrls: ['./appointments-today.component.css'],
})
export class AppointmentsTodayComponent implements OnInit {
  appointments: Appointment[] = [];
  today = new Date();
  formattedDate=formatDate(this.today);

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.appointmentService.getAppointmentsToday().subscribe(appointments => {
      this.appointments = appointments.sort((a: Appointment, b: Appointment) => {
        //@ts-ignore
        const dateA = new Date(a.dateTime).getTime();
        //@ts-ignore
        const dateB = new Date(b.dateTime).getTime();
        return dateA - dateB;
      });
    });
  }


  appointmentToValidate(appointment: Appointment) {
    const dialogRef = this.dialog.open(PaymentDialogComponent, {
      width: '300px',
      data: { appointment: appointment }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.appointmentService.validateAppointment(appointment.id!.toString(), result).subscribe(updatedAppointment => {
        console.log(updatedAppointment);
      });
    });
  }

  OnAddAppointmentClick(): void {
    const dialogRef = this.dialog.open(AddAppointmentDialogComponent, {
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('New appointment details:', result);
      }
    });
  }
}
