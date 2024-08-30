import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientListComponent} from "./patient/patient-list/patient-list.component";
import {AppointmentListComponent} from "./appointment/appointment-list/appointment-list.component";
import {DashboardComponent} from "./template/dashboard/dashboard.component";
import {HomeComponent} from "./template/home/home.component";
import {CreatePatientComponent} from "./patient/create-patient/create-patient.component";
import {CreateAppointmentComponent} from "./appointment/create-appointment/create-appointment.component";
import {PatientDetailsComponent} from "./patient/patient-details/patient-details.component";
import {UpdatePatientComponent} from "./patient/update-patient/update-patient.component";
import {AppointmentDetailsComponent} from "./appointment/appointment-details/appointment-details.component";
import {AppointmentsTodayComponent} from "./appointment/appointments-today/appointments-today.component";
import {PaymentListComponent} from "./payment/payment-list/payment-list.component";

const routes: Routes = [
  {path:"patients", component: PatientListComponent},
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"patients/:id", component: PatientDetailsComponent},
  {path:"create-patient", component: CreatePatientComponent},
  {path:"update-patient/:id", component: UpdatePatientComponent},
  {path:"appointments/patient/:id", component: AppointmentListComponent},
  {path:"appointments-today", component: AppointmentsTodayComponent},
  {path:"create-appointment", component: CreateAppointmentComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"home", component: HomeComponent},
  {path:"payments/patient/:id", component: PaymentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
