import { Component, OnInit } from '@angular/core';
import { Appointment } from "../../models/appointment.model";
import { AppointmentService } from "../../service/appointment.service";
import { MatDialog } from "@angular/material/dialog";
import {AddAppointmentDialogComponent} from "../add-appontment-dialog/add-appointment-dialog.component";

// Configurable parameters for appointment slots
const morningStartTime = "09:00";
const morningEndTime = "12:30";
const afternoonStartTime = "15:00";
const afternoonEndTime = "20:00";
const slotDurationMinutes = 20;

@Component({
  selector: 'app-appointments-today',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css'],
})
export class AppointmentsListComponent implements OnInit {
  appointments: Appointment[] = [];
  timeSlots: string[] = [];

  constructor(
    private appointmentService: AppointmentService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.timeSlots = this.generateTimeSlots(morningStartTime, morningEndTime, afternoonStartTime, afternoonEndTime, slotDurationMinutes);

    // Load appointments and sort them by time
    this.appointmentService.getAppointmentsToday().subscribe(appointments => {
      this.appointments = appointments.sort((a: Appointment, b: Appointment) => {
        // @ts-ignore
        const dateA = new Date(a.dateTime).getTime();
        // @ts-ignore
        const dateB = new Date(b.dateTime).getTime();
        return dateA - dateB;
      });
      console.table(this.appointments);
    });
  }

  // Generate time slots based on start, end, and interval
  generateTimeSlots(morningStart: string, morningEnd: string, afternoonStart: string, afternoonEnd: string, interval: number): string[] {
    let slots: string[] = [];
    slots = slots.concat(this.createSlots(morningStart, morningEnd, interval));
    slots = slots.concat(this.createSlots(afternoonStart, afternoonEnd, interval));
    return slots;
  }

  // Helper method to create slots for a given start, end, and interval
  createSlots(startTime: string, endTime: string, interval: number): string[] {
    const slots: string[] = [];
    let start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);

    while (start < end) {
      slots.push(start.toTimeString().substring(0, 5)); // HH:mm format
      start = new Date(start.getTime() + interval * 60000); // Add interval in minutes
    }

    return slots;
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
