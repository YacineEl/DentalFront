import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../service/appointment.service';
import { Appointment } from '../../models/appointment.model';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
  @Input() appointment!: Appointment;
  pageId:number=-1;

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id');
    if (id!=null){
      this.pageId = +id;
      this.loadAppointmentDetails(+this.pageId); // Convert string to number
    }
    console.log("id: "+ id);
    console.log("pageId: " + this.pageId);

  }

  loadAppointmentDetails(id: number): void {
    this.appointmentService.getAppointmentById(id).subscribe({
      next: (appointment) => {this.appointment = appointment;console.log(appointment)} ,
      error: (err) => console.error('Failed to load appointment:', err),
    });
  }
}
