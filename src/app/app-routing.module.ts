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

const routes: Routes = [
  {path:"patients", component: PatientListComponent},
  {path:"",redirectTo:"patients", pathMatch:"full"},
  {path:"patients/:id", component: PatientDetailsComponent},
  {path:"create-patient", component: CreatePatientComponent},
  {path:"update-patient/:id", component: UpdatePatientComponent},
  {path:"appointments/patient/:id", component: AppointmentListComponent},
  {path:"create-appointment", component: CreateAppointmentComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
