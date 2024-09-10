import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientItemComponent } from './patient/patient-item/patient-item.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { AppointmentDetailsComponent } from './appointment/appointment-details/appointment-details.component';
import { AppointmentItemComponent } from './appointment/appointment-item/appointment-item.component';
import {PatientService} from "./service/patient.service";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { FooterComponent } from './template/footer/footer.component';
import { CreatePatientComponent } from './patient/create-patient/create-patient.component';
import { CreateAppointmentComponent } from './appointment/create-appointment/create-appointment.component';
import { HomeComponent } from './template/home/home.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RecurrenceEditorModule, ScheduleModule} from "@syncfusion/ej2-angular-schedule";

import { DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from "@syncfusion/ej2-angular-schedule";
import {DashboardComponent} from "./template/dashboard/dashboard.component";
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';
import { LayoutComponent } from './template/layout/layout.component';
import { AppointmentsTodayComponent } from './appointment/appointments-today/appointments-today.component';
import { PaymentItemComponent } from './payment/payment-item/payment-item.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';
import { CreatePaymentComponent } from './payment/create-payment/create-payment.component';
import { PaymentDialogComponent } from './payment/payment-dialog/payment-dialog.component';
import {MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField, MatHint} from "@angular/material/form-field";
import {MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {DataTablesModule} from "angular-datatables";
import {AddAppointmentDialogComponent} from "./appointment/add-appontment-dialog/add-appointment-dialog.component";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {NgxMatTimepickerModule} from "ngx-mat-timepicker";
import {AppointmentsListComponent} from "./appointment/appointments-list/appointments-list.component";
import { RiskFactorComponent } from './patient/risk-factor/risk-factor.component';
import { ActComponent } from './appointment/act/act.component';
import { ActListComponent } from './appointment/act-list/act-list.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    PatientItemComponent,
    PatientListComponent,
    PatientDetailsComponent,
    AppointmentDetailsComponent,
    AppointmentItemComponent,
    AppointmentsListComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CreatePatientComponent,
    CreateAppointmentComponent,
    HomeComponent,
    DashboardComponent,
    HomeComponent,
    UpdatePatientComponent,
    LayoutComponent,
    AppointmentsTodayComponent,
    PaymentItemComponent,
    PaymentListComponent,
    CreatePaymentComponent,
    PaymentDialogComponent,
    AddAppointmentDialogComponent,
    RiskFactorComponent,
    ActComponent,
    ActListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    ScheduleModule, RecurrenceEditorModule, MatDialogTitle, MatFormField, MatDialogActions, MatDialogContent, MatInput, MatButton,
    DataTablesModule,
    MatLabel, MatAutocomplete, MatOption, MatDatepickerToggle, MatDatepicker, MatAutocompleteTrigger, MatDatepickerInput,
    MatNativeDateModule,
    MatHint,
    NgxMatTimepickerModule, MatCard, MatCardHeader, MatCardContent, MatCardModule
  ],
  providers: [
    provideAnimationsAsync(),
    PatientService,
    DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
