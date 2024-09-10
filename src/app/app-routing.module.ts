import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientListComponent} from "./patient/patient-list/patient-list.component";
import {DashboardComponent} from "./template/dashboard/dashboard.component";
import {HomeComponent} from "./template/home/home.component";
import {CreatePatientComponent} from "./patient/create-patient/create-patient.component";
import {CreateAppointmentComponent} from "./appointment/create-appointment/create-appointment.component";
import {PatientDetailsComponent} from "./patient/patient-details/patient-details.component";
import {UpdatePatientComponent} from "./patient/update-patient/update-patient.component";
import {AppointmentsTodayComponent} from "./appointment/appointments-today/appointments-today.component";
import {PaymentListComponent} from "./payment/payment-list/payment-list.component";
import {AppointmentsListComponent} from "./appointment/appointments-list/appointments-list.component";
import {AppointmentDetailsComponent} from "./appointment/appointment-details/appointment-details.component";

const routes: Routes = [
  {path:"patients", component: PatientListComponent},
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"patients/:id", component: PatientDetailsComponent},
  {path:"create-patient", component: CreatePatientComponent},
  {path:"update-patient/:id", component: UpdatePatientComponent},
  {path:"appointments/patient/:id", component: AppointmentsListComponent},
  {path:"appointments-today", component: AppointmentsTodayComponent},
  {path:"create-appointment", component: CreateAppointmentComponent},
  {path:"appointment-details/:id", component: AppointmentDetailsComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"home", component: HomeComponent},
  {path:"payments/patient/:id", component: PaymentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
