import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientItemComponent } from './patient/patient-item/patient-item.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { AppointmentDetailsComponent } from './appointment/appointment-details/appointment-details.component';
import { AppointmentItemComponent } from './appointment/appointment-item/appointment-item.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import {PatientService} from "./service/patient.service";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { FooterComponent } from './template/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientItemComponent,
    PatientListComponent,
    PatientDetailsComponent,
    AppointmentDetailsComponent,
    AppointmentItemComponent,
    AppointmentListComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTable,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatPaginator,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
